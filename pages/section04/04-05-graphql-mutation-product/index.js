import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #변수 타입 적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 전달할 변수 적는곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈니",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API요청</button>;
}
