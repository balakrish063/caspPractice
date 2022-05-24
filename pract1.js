var input = 'foo bar "lorem ipsum" "dolor sit amet" baz';
var terms = input.split(" ");

var items = [];
var buffer = [];
for(var i = 0; i < terms.length; i++) {
    if(terms[i].indexOf('"') != -1) { // outer phrase fragment -- N.B.: assumes quote is either first or last character
        if(buffer.length === 0) { // beginning of phrase
            //console.log("start:", terms[i]);
            buffer.push(terms[i].substr(1));
        } else { // end of phrase
            //console.log("end:", terms[i]);
            buffer.push(terms[i].substr(0, terms[i].length - 1));
            items.push(buffer.join(" "));
            buffer = [];
        }
    } else if(buffer.length != 0) { // inner phrase fragment
        //console.log("cont'd:", terms[i]);
        buffer.push(terms[i]);
    } else { // individual term
        //console.log("standalone:", terms[i]);
        items.push(terms[i]);
    }
    //console.log(items, "\n", buffer);
}
items = items.concat(buffer);
