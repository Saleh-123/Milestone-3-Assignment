function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


function woodCalculator(chair,table,bed){
    var chairCount = chair *1;
    var tableCount = table *3;
    var bedCount = bed * 5;
    
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}


function tinyFriend(names){
    var friendsName = names[0];
    for(var i=0; i<names.length; i++){
        var currentName = names[i];
        if(currentName.length <friendsName.length){
            friendsName = currentName;
        }
    }
    return friendsName;
}

