import setAnalyticsEventTracker from "../components/analytics/trackAnalytics";

type Props = {
  children: string;
  location: string;
  bg_color?: string;
  txt_color?: string;
  maxWidth?: number;
  analyticsName?: string;
};

const HabyButton = (props: Props) => {
  const { maxWidth } = props
  const setWidth = maxWidth ? { maxWidth: `${maxWidth}px`} : {}
  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7YGyG12qvYqsIIG6KrWEAdlb3y_uoymVL1f9pmrMo-wVegA/viewform?usp=sf_link" className="haby_button" style={setWidth}
      onClick={()=>{setAnalyticsEventTracker(props.analyticsName)}}>
        {props.children}
    </a>
  )
}

export default HabyButton