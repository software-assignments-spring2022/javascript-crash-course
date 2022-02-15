// block-scoped non-constant variables are declared with the let keyword

let it = true; // it's true!

it = it ? false : true; // reassign it to be its opposite using the ternary operator

console.log(`It is ${it}!`); // expected output: 'It is false!' - note the string template syntax




alpha = [ 4, 5, 6, ...[ 10, 11, 12 ] ]
beta = ( x => true )()
gamma = ( async () => 'hello' )( )
delta = [...[...[1, 2, 3] ] ].length
epsilon = ( ( y, x ) => ( x ) ? x : y )( true, false )
console.log(alpha)
console.log(beta)
console.log(gamma)
console.log(delta)
console.log(epsilon)