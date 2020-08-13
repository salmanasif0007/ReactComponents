


firebase.firestore().collection("product").add({
    productName:"",
    productDetails:"",
    productPrice:"",
    productImg:"",
    reatting:"",
    comment:[{
        userName:"Salman Asif",
        UserComment:"That's Rally good phone",
        userImg:"https://scontent.fdac90-1.fna.fbcdn.net/v/t1.0-9/109520832_2745896775697560_8499902460103558254_o.jpg?_nc_cat=100&_nc_sid=a4a2d7&_nc_eui2=AeFr1oxSmLXT6dlWZwj-rY6tZ40YsGFEMHxnjRiwYUQwfDPGX1zWjzoNFzpW5k_aRPF_kBpl-VJGQxuH3macH1_o&_nc_ohc=WpYC4nuj4_sAX_srsnz&_nc_ht=scontent.fdac90-1.fna&oh=a55836637fbdcb3e15e120ba12020d7f&oe=5F582DDD",
        userReatting:"5"
    }],
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
