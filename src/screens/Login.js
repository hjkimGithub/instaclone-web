import styled from "styled-components";

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function Login() {
    return (
        <Container>
            <div>
                <h1>Instagram</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" placeholder="Log in" />
                </form>
                <span>Or</span>
                <span>Log in with Facebook</span>
            </div>
            <div>
                <span>Don't have an account?</span>
            </div>
        </Container>
    );
}
export default Login;