// https://app.programiz.pro/community-challenges/challenge/javascript-carol-numbers/info

function carolNumber(n) {
    return (Math.pow(Math.pow(2,n)-1,2)-2)
}


console.log(carolNumber(3));