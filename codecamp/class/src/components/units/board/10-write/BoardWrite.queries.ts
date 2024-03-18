import { gql } from "@apollo/client";
export const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer:String, $title:String, $contents: String{

    createBoard(writer:$writer , title:$title , contents:$contents ) {
      _id
      number
      message
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updeteBoard($number:Int,$writer:String, $title:String, $contents: String{

    updeateBoard(number : $number,writer:$writer , title:$title , contents:$contents ) {
      _id
      number
      message
    }
  }
`;
