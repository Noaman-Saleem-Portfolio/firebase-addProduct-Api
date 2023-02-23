const { Firestore } = require("@google-cloud/firestore");

//This is my GoogleCloud Credentials file
//I did not push it to github because it has sensitive info of the account
const CREDENTIALS = require("../jobtaskapi-a208a7b6f804.json");

//You can replace the project_id, client_email, private_key of your Google Cloud account
const firestore = new Firestore({
  projectId: CREDENTIALS.project_id,
  credentials: {
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  },
});

const product = firestore.collection("Products");

const createProduct = async (newProduct) => {
  try {
    let record = await product.add(newProduct);
    return {
      success: true,
      id: record.id,
    };
  } catch (error) {
    console.log(`Error at createDocument --> ${error}`);
    return {
      success: false,
      id: "",
    };
  }
};

// createProduct(
//     {
//         category: 'men',
//         price: 200
//     }
// )
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

module.exports = {
  createProduct,
};
