function appendRandom(list) {
    let rand = Math.floor(Math.random() * 100);
    list.push(rand);
    console.log(`New List is ${list}`);
}
//appendRandom([]);
//appendRandom(['a']);
//appendRandom(['a', 'b']);
//appendRandom(['a', 'b', 'c', 'd']);
//appendRandom(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
// appendRandom(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']);
// appendRandom(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'za', 'zb', 'zc', 'zd', 'ze', 'zf'])
function loop(arr) {
    for (let el in arr) {
        console.log(el);
    }
}
//loop(['a'])
//loop(['a', 'b'])
//loop(['a', 'b', 'c', 'd'])
//loop(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])                                                                                                                          
// loop(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','za', 'zb', 'zc', 'zd', 'ze', 'zf'])
function binarySearch(list, el) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2 );
        let guess = list[mid];
        console.log(guess);
        if (guess === el) {
            return `Found at index ${mid}`;
        } else if (guess > el) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
//binarySearch(['a'], 'a')
//binarySearch(['a', 'b'], 'b')



binarySearch(['a', 'b', 'c', 'd'], 'c')
// binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'g')
// binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'], 'b')
// binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','za', 'zb', 'zc', 'zd', 'ze', 'zf'], 'zf')