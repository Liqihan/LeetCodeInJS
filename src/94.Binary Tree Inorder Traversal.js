/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    traversal(root, result);
    function traversal(node, arr) {
        if (!node) {
            return;
        }
        traversal(node.left, arr);
        arr.push(node.val);
        traversal(node.right, arr);
    }
    return result;
};
