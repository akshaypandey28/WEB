let binarysearch = `
/**
 * This function tries to find the element x in the sorted array arr
 * @param {* Sorted arrangement of elements in the given array} arr 
 * @param {* Element to find } x 
 */
function binarySearch(arr, x) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,5,7,8,9,13,16,17,20,22,25,26], 33))
`;
let binaryTree=`
#include<bits/stdc++.h>
using namespace std;
class Node{
    public :
    int value;
    Node* left;
    Node* right;
    Node(int val){
        value=val;
        left=NULL;
        right=NULL;
    }
};
void preOrder(Node* rootNode){
    if(rootNode==NULL){  //base case
        return ;
    }
    cout<<rootNode->value<<" ";
    //recursive call
    preOrder(rootNode->left);
    preOrder(rootNode->right);
}
void inOrder(Node* rootNode){
    if(rootNode==NULL){  //base case
        return ;
    }
    //recursive call
    inOrder(rootNode->left);
    cout<<rootNode->value<<" ";
    inOrder(rootNode->right);
}
void postOrder(Node* rootNode){
    if(rootNode==NULL){  //base case
        return ;
    }
    //recursive call
    postOrder(rootNode->left);
    postOrder(rootNode->right);
    cout<<rootNode->value<<" ";
}
void levelOrder(Node* rootNode){
    if(rootNode==NULL){
        return ;
    }
    queue<Node*> q;
    q.push(rootNode);

    while(q.empty()!=1){
        int size=q.size(); //this tells about no. of nodes at current level
        while(size--){
            Node* currNode=q.front();
            q.pop();
            cout<<currNode->value<<" ";
            if(currNode->left!=NULL){
                q.push(currNode->left);
            }
            if(currNode->right!=NULL){
                q.push(currNode->right);
            }
        }
        cout<<endl;
    }
}
void preOrderIterative(Node* root){
    stack<Node*> s;
    vector<int> ans;
    if(root!=NULL) s.push(root);
    while(s.empty()!=1){
        Node* temp=s.top();
        s.pop();
        ans.push_back(temp->value);
//here right and then left is pushed because stack is lifo data structure that's why right and then left
        if(temp->right) s.push(temp->right);
        if(temp->left)  s.push(temp->left);
    }
    for (auto ele:ans){
        cout<<ele<<" ";
    }
    cout<<endl;
}
void inOrderIterative(Node* root){
    stack<Node*> s; 
    vector<int> ans;
    Node* node=root;
    while(s.empty()!=1 || node!=NULL){
        if(node!=NULL) {
            s.push(node);
            node=node->left;
        }
        else { //node is NULL
            Node* temp=s.top();
            s.pop();
            ans.push_back(temp->value);
            node=temp->right;
        }
    }
    for (auto ele:ans){
        cout<<ele<<" ";
    }
    cout<<endl;
}
void postOrderIterative(Node* root){
    stack<Node*> s; //stack is like root right left and also ans 
    //but in postorder traversal is like left right root
    //that's why ans is reversed 
    vector<int> ans;
    if(root!=NULL) s.push(root);
    while(s.empty()!=1){
        Node* temp=s.top();
        s.pop();
        ans.push_back(temp->value);
        //here right and then left is pushed 
        if(temp->left){
            s.push(temp->left);
        }
        if(temp->right){
            s.push(temp->right);
        }
    }
    reverse(ans.begin(),ans.end());
    for (auto ele:ans){
        cout<<ele<<" ";
    }
    cout<<endl;
}

int main(){
    Node* rootNode=new Node(2);
    rootNode->left=new Node(4);
    rootNode->right=new Node(10);
    rootNode->left->left=new Node(6);
    rootNode->left->right=new Node(5);
    rootNode->right->right=new Node(11);
    rootNode->right->right->right=new Node(12);
    // cout<<"root node :"<<rootNode->value<<"- root left :"<<
    // rootNode->left->value<<"- root right :"<<rootNode->right->value<<endl;
    cout<<"PreOrder ";
    preOrder(rootNode);
    cout<<endl;
    cout<<"InOrder ";
    inOrder(rootNode);
    cout<<endl;
    cout<<"PostOrder ";
    postOrder(rootNode);
    cout<<endl;
    cout<<"LevelOrder"<<endl;
    levelOrder(rootNode);
    cout<<endl;
    cout<<"PreOrder Iterative ";
    preOrderIterative(rootNode);
    cout<<endl;
    cout<<"InOrder Iterative ";
    inOrderIterative(rootNode);
    cout<<endl;
    cout<<"PostOrder Iterative ";
    postOrderIterative(rootNode);
    cout<<endl;

return 0;
}
`

module.exports={binaryTree,binarysearch}