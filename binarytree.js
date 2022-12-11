class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//IN C#/Java
/*class Node{
    private string val;
    public Node(string val){
      this.val = val
    }
}*/

const a = new Node('a'); //Instantiating the node
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b; a.right = c; 
b.left = d; b.right = e;
c.right = f;

const depthFirstSearch = (root)=>{
    const result = [];
    if(root == null) return result;

    const stack = [root]

    while(stack.length > 0){
        const current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
        
    }

    return result;
}

const depthFirstRecursion=(root)=>{
    if(root==null) return []

    const left = depthFirstRecursion(root.left);
    const right = depthFirstRecursion(root.right);

    return [root.val, ...left, ...right]
}

const breadthFirstSearch=(root)=>{
    const results = [];
    if(root==null) return results;

    const queue = [root];

    while(queue.length > 0){
        const current = queue.shift();
        results.push(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }
    return results;
}

/*console.log(depthFirstSearch(a), "Non recursion")
console.log(depthFirstRecursion(a), "Recursion");
console.log(breadthFirstSearch(a), "Breadth first search")*/

const FindDInTheBinaryTree = (root, target)=>{
    if(root == null) return false;

    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();

        if(current.val == target) return true;

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right)
    }

    return false;
}

console.log(FindDInTheBinaryTree(a,'g'));

const MaximumDepth = (root, cnt = 0)=>{
    if(root == null) return cnt;
    cnt++;

    const left = MaximumDepth(root.left, cnt);
    const right = MaximumDepth(root.right, cnt);

    return Math.max(left, right);
}

console.log(MaximumDepth(a),"Maximum count");