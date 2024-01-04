/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0
    }
    return (1 + Math.max(maxDepth(root.right), maxDepth(root.left))  )  
};

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

let root = new TreeNode(3, 9, 20, null, null, 15, 7, null)
let root2 = new TreeNode()
let root3 = new TreeNode()
root2.val = 3
root2.left = 9
root2.right = 20
root2.right.left = 15
root2.right.right = 7

console.log(maxDepth(root2))
