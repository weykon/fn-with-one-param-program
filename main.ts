function main() {

}

main();



// promblem start
type User = { balance: number };
function withdraw(user: User, amount: number): boolean {
    if (user.balance - amount < 0) {
        return false;
    }

    if (amount > user.balance) {
        return false;
    }

    user.balance -= amount;
    return true;
}


// think - each check must pust on the same func is verbose
type Mayby<T> = { type: 'just' | 'nothing', value: T };
