import styled from 'styled-components';

const LogIn = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt=''/>
                <SignUp>Get All There</SignUp>
                <Description>
                    Get Premium Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription, As of 07/01.2025, the price of Disney+ and the Disney Bundle will increase by $1.  
                </Description>
                <CTALogoOne src='/images/cta-logo-two.png' alt='' />
            </CTA>
            <BgImage />

        </Content>
    </Container>
    );
};


const Container = styled.section`
    overflow :hidden;
    display: flex;
    flex-direction: column;
    text-align : center;
    height: 100vh;

`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height : 100%
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;   
    background-repeat : no-repeat;
    background-image : url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition : opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 18px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 18 px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    /* max-width: 300px; */
    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`;


export default LogIn;