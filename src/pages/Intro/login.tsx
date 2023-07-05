import { Navigate } from "react-router-dom"

declare global {
  interface Window {
    Kakao: any
  }
}

const onLoginWithKakao = () => {
  const redirectUri = `${import.meta.env.VITE_LOCAL_URL}/callback/kakaotalk`
  const scope = [
    import.meta.env.VITE_KAKAO_SCOPE_NICKNAME,
    import.meta.env.VITE_KAKAO_SCOPE_GENDER,
    import.meta.env.VITE_KAKAO_SCOPE_BIRTHDAY,
  ].join(',')

  window.Kakao.Auth.authorize({
    redirectUri,
    scope,
  })
}

const searchParams = new URLSearchParams(import.meta.env.VITE_LOCAL_URL.search)
const code = searchParams.get('code')


const Login = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY)
  } 
  if (!code) {
    return <Navigate to="/login" />
  }
  return (
    <button onClick={onLoginWithKakao}>카카오 로그인</button>
  )
}

export default Login
