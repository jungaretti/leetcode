class ListNode {
    public var val: Int
    public var next: ListNode?
    public init(_ val: Int) {
        self.val = val
        next = nil
    }
}

class Solution {
    func partition(_ head: ListNode?, _ x: Int) -> ListNode? {
        let preheadFront = ListNode(0)
        let preheadBack = ListNode(0)

        // Initialize iterators
        var front = preheadFront
        var back = preheadBack
        var current = head

        while current != nil {
            if current!.val >= x {
                back.next = current
                back = current!
            } else {
                front.next = current
                front = current!
            }
            current = current!.next
        }

        // Link the partitions together
        front.next = preheadBack.next
        back.next = nil

        return preheadFront.next
    }
}
