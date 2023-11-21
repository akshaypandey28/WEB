// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Election {

    //Voter named struct contains the voters information
    struct Voter {
        string name;
        uint number_id;
        bool isRegistered;
        bool hasVoted;
        uint votedFor;
    }

    //Candidate named struct contains the candidate information 
    struct Candidate {
        string party;
        uint numvotes;
        uint voteCount;
    }

    // DYNAMIC ARRAY TO STORE NO OF CANDIDATES
    Candidate[] public candidates;

    // Mapping to store voter information
    mapping(address => Voter) public voters;

    // CANDIDATE REGISTRATION
    function registerCandidate(string memory _name, uint _number) public {
        Candidate memory newCandidate = Candidate({party: _name, numvotes: _number, voteCount: 0});
        candidates.push(newCandidate);

        // Emit event for candidate registration
        emit CandidateRegistered(candidates.length - 1, _name, _number);
    }

    // Voooooo
    function registerVoter(string memory _name, uint _number_id) public {
        require(!voters[msg.sender].isRegistered, "Voter is already registered.");
        Voter memory newVoter = Voter(_name, _number_id, true, false, 0);
        voters[msg.sender] = newVoter;

        // Emit event for voter registration
        emit VoterRegistered(msg.sender, _name, _number_id);
    }

    // Event to signal the registration of a new voter
    event VoterRegistered(address indexed voterAddress, string name, uint number_id);

    // Event to signal the registration of a new candidate
    event CandidateRegistered(uint indexed candidateId, string name, uint numvotes);

    // Mapping to associate candidate IDs with candidates
    mapping(uint => Candidate) public candidateById;

    // Voting
    //to allow a registered voter to cast a vote for a specific candidate
    function vote(uint _candidateId) public {
        // this will fetch the voter's information from the 'voters' mapping using the sender's address
        Voter storage voter = voters[msg.sender];

        //to ensure that voter must be registered before allowing them for voting
        require(voter.isRegistered, "The voter must be registered.");

        //confirm that voter is not casted a vote till now
        require(!voter.hasVoted, "The voter has already voted.");


        require(_candidateId < candidates.length, "Invalid candidate.");

        //mark the voter as having voted and record the candidate they voted
        voter.hasVoted = true;
        voter.votedFor = _candidateId;

        // Increment the vote count for the selected candidate
        candidateById[_candidateId].voteCount++;
    }

    // Getting the total number of votes for a candidate
    function getVotes(uint _candidateId) public view returns (uint) {

        // this ensure that the provided candidate ID is valid (within the range of the candidates array)
        require(_candidateId < candidates.length, "Invalid candidate.");

        // and finally return the vote count for the specified candidate
        return candidateById[_candidateId].voteCount;
    }

    // Getting the winner of the election
    function getWinner() public view returns (uint) {
        uint winnerId = 0;
        uint maxVotes = 0;

        //this loop iterates over the candidates array and help in finding the winner of the election
        for (uint i = 0; i < candidates.length; i++) {
            if (candidateById[i].voteCount > maxVotes) {
                maxVotes = candidateById[i].voteCount;
                winnerId = i;
            }
        }

        return winnerId;
    }
}
