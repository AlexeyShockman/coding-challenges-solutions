function addTwoNumbers (l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    let carry = 0;

    while (l1 || l2 || carry) {
        const val1 = l1? l1.val : 0;
        const val2 = l2? l2.val : 0;

        const sum = val1 + val2 + carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit);
        current = current.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next;

}



const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}

const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}

console.log(addTwoNumbers(l1, l2))