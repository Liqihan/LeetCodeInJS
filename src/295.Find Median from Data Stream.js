/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var length = this.list.length;
    var pos = 0;
    if (!length) {
        this.list.push(num);
        return;
    }
    while (this.list[pos] < num && pos < length) {
        pos++;
    }
    this.list.splice(pos, 0, num);
    console.log(this.list);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var length = this.list.length;
    var isOdd = length % 2 === 0;
    if (isOdd) {
        return (this.list[length / 2] + this.list[length / 2 - 1]) / 2;
    }
    return this.list[(length - 1) / 2];
};

var a = new MedianFinder();
a.addNum(1);
a.addNum(3);
a.addNum(2);
a.addNum(4);
a.addNum(5);
console.log(a.findMedian());
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
