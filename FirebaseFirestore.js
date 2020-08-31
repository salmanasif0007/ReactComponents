 Delete From Firestore array
 
 firebase.firestore().collection("teacher").doc('2ORGxETKwfBODpVl7mls').update({
    "studentId": firebase.firestore.FieldValue.arrayRemove({"course": data.course,"info":data.info ,"status":data.status})
})



Arrey Union And remove 

var washingtonRef = db.collection("cities").doc("DC");

// Atomically add a new region to the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
});

// Atomically remove a region from the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
});
