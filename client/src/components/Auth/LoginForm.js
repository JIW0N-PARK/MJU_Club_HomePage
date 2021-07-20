import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faUnlockAlt,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  InputGroup,
  FormControl,
  Form,
  Container,
  Col,
  Row,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { kakaoLogin, clearError } from "../../actions";

function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const loading = useSelector((state) => state.authReducer.loading);

  return (
    <>
      <style type="text/css">
        {`
        .body{
          border : 3px solid #F1C40F;
          text-align: center;
        }
        
        .form-title {
          font: 1.8rem bold;
          margin-bottom : 20px;
        }
        
        .card-link{
          color : black;
        }

        #join{
          float:left;
          text-align: start;
        }
  
        #find {
          float:right;
        }

    `}
      </style>
      {error !== null && (
        <Container className="mt-3">
          <Row>
            <Alert
              variant="danger"
              onClose={() => dispatch(clearError())}
              dismissible
            >
              <p> {error.message} </p>
            </Alert>
          </Row>
        </Container>
      )}
      <Card className="body pt-3 pb-3 m-3 mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <div className="fa-layers">
                <FontAwesomeIcon
                  icon={faCircle}
                  color="#F1C40F"
                  size="4x"
                  transform="up-8 left-5"
                />
                <FontAwesomeIcon
                  icon={faUnlockAlt}
                  inverse
                  size="4x"
                  transform="shrink-6 up-8 left-4"
                />
              </div>
              <div className="form-title">로그인</div>
              <Form className="login-form mb-3">
                <Form.Group controlId="email">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="addon">
                        <FontAwesomeIcon
                          icon={faUser}
                          color="gray"
                          fixedWidth
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="email" placeholder="이메일" />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="pw">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="addon">
                        <FontAwesomeIcon icon={faKey} color="gray" fixedWidth />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="password" placeholder="비밀번호" />
                  </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2">
                  {!loading && (
                    <>
                      <Button variant="warning" type="submit">
                        로그인
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => {
                          dispatch(kakaoLogin());
                        }}
                      >
                        Kakao 로그인
                      </Button>
                    </>
                  )}
                  {loading && (
                    <Button variant="warning" type="submit">
                      <Spinner animation="grow" variant="light" />
                    </Button>
                  )}
                </div>
              </Form>
              <Row>
                <Col>
                  <Card.Link href="/join" id="join">
                    회원가입
                  </Card.Link>
                </Col>
                <Col>
                  <Card.Link href="/findIdPw" id="find">
                    ID/PW찾기
                  </Card.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default LoginForm;
