import React from "react";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Row , Container, Form , Button} from "react-bootstrap";
import FormCard from "./FormCard";
import Ipsum from "../Ipsum";

// const error = useSelector((state) => state.authReducer.error);
const validCheck = () => {
  
};

class TermCheck extends React.Component {
  render() {
    return (
      <>
        <style>
          {
            `
          .scroll{
            overflow : scroll;
          }
          `
          }
        </style>
        <Container className="text-left">
          <Form action="/" method="post">
          <Row><h5>사용약관</h5></Row>
          <Row>
            <div className="scroll">
              <Ipsum title={"사용약관"} />
            </div>
            <div className="text-end"><Form.Check label={'동의'} id={'isAgree'}/></div>
          </Row>
          <Row><h5>개인정보처리방침</h5></Row>
          <Row>
            <div className="scroll">
              <Ipsum title={"개인정보 처리 방침"} />
            </div>
            <div className="text-end"><Form.Check label={'동의'} id={'isAgree'}/></div>
          </Row>
          </Form>
        </Container>
        <div className="text-center"><Button type="submit" onClick="validCheck">다음</Button></div>
      </>
    );
  }
}

const content = <TermCheck />
const JoinTerm = () => {
  return (
    <FormCard icon={faUserCheck} content={content} title={"회원가입"} />
  );
}

export default JoinTerm;