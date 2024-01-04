/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// TreeNode.prototype.addNode = function () {}

// function addNode(treeNode, val) {
//     if(val < treeNode.val && !treeNode.left){
//         treeNode.left = treeNode
//     }
//     else{
//         treeNode.right = treeNode
//     }

// }

// var getTargetCopy = function(original, cloned, target) {
//     let foundIndex = 0
//     for(nodes of original) {
//         if(original[nodes] === target) {
//            foundIndex = nodes
//         }
//     }
//     let reference = cloned[foundIndex]
//     return reference
// };

var getTargetCopy = function(original, cloned, target) {
    if (original == null) {
        return null
    }
    if (original == target) {
        return cloned
    }
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)
};
