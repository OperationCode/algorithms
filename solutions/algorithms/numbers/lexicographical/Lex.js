
import Stack from '../../../data-structures/stack/Stack';

export function lexicalOrder( n)
{
    var res = new Array();
    var s = new Stack();
    s.push(1);
    while(!s.isEmpty())
    {
        var cur = s.peek();
        res.push(cur);
        s.pop();
        if(cur + 1 <= n && 9 > cur%10)
            s.push(cur + 1);
        if(cur * 10  <= n)
            s.push(cur * 10);
    }
    return res;
}
