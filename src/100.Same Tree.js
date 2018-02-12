/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var result1 = [],result2 = [];
    function getArr (root, arr) {
        if (!root) {
            arr.push(null);
            return;
        }
        arr.push(root.val);
        getArr(root.left, arr);
        getArr(root.right, arr);
        return arr;
    }
    if (p instanceof TreeNode) {
        getArr(p, result1);
    }
    if (q instanceof TreeNode) {
        getArr(q, result2);
    }
    return result1.toString() === result2.toString();
};