import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";
const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const {data, state} = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state])

  return (
    /*
      Form 의 경우 속해있는 라우터에 있는 액션이 자동으로 실행됨. 이 컴포넌트의 경우 모든 라우터에 속해있기 때문에 적합하지 않음.
      fetcher.Form : 액션을 실행하나 그 액션이 실행되는 라우터나 페이지로 이동하지 않음!
      그 외에도 위의 경우처럼 fetcher 내부의 data나 state를 가져와서 페이지 이동 없이 팝업 창 띄우고 싶을 때 사용!
     */
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;