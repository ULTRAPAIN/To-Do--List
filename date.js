
exports.getDate = function (){
    let day=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    
    let Today= day.toLocaleDateString("en-US",options);
    return Today;
};


exports.getDay = function (){
    let date=new Date();
    let options={
        weekday:"long",
    };
    
    let day= date.toLocaleDateString("en-US",options);
    return day;
};



