
//important to avoid collision 
function hashStringToInt(string, tableSize) {
    let hash = 17;

    for(let i = 0; i < string.length; i++) {
        hash = (13 * hash * string.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable {
    //depending on how many items are stored, this size will affect performance. Allow for size declaration?
    table = new Array(3333);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if(item) {
                item.forEach(([key,value]) => {
                    const index = hashStringToInt(key, newTable.length);
                    if(newTable[index]) {
                        newTable[index].push([key, value]);
                    }
                    else {
                        newTable[index] = [[key, value]]
                    }
                });
            }
        });
        this.table = newTable;
    }
    

    setItem = (key, value) => {
        this.numItems++;
        //we prob want to recompute loadFactor every time we do numItems
        const loadFactor = this.numItems / this.table.length;

        if(loadFactor > .8) {
            //resize our array
            this.resize();
        }

        const index = hashStringToInt(key, this.table.length);

        if(this.table[index]) {
            this.table[index].push([key, value]);
        }
        else {
            this.table[index] = [[key, value]]
        }

    };

    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length);

        if(!this.table[index]) {
            return null;
        }

        // O(n) is possible if there are n collisions
        return this.table[index].find(x => x[0] === key)[1];
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "quaide");
console.log(myTable.table.length);
myTable.setItem("lastName", "t");
myTable.setItem("age", 29);
myTable.setItem("dob", "1/1/1");
//console.log(myTable.table[0])
console.log("first name is " + myTable.getItem("firstName"));
console.log("last name is " + myTable.getItem("lastName"));
console.log("age is " + myTable.getItem("age"));
console.log("dob is " + myTable.getItem("dob"));
console.log(myTable.table.length);
//stores in array under the hood
{
    firstName: '5'
}