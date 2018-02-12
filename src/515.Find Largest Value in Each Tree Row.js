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
var largestValues = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    helper(root, 1, res);
    return res;
    function helper(node, depth, arr) {
        if (depth > arr.length) {
            arr.push(node.val);
        } else {
            if (node.val > arr[depth - 1]) {
                arr[depth - 1] = node.val;
            }
        }
        if (node.left) {
            helper(node.left, depth + 1, arr);
        }
        if (node.right) {
            helper(node.right, depth + 1, arr);
        }
    }
};
