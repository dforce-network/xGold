import React from "react";
import { FormattedMessage } from "react-intl";
import SvgIcon from "../../components/SvgIcon/index";
function Banner(props) {
  return (
    <div className={"banner"}>
      <div className={"svgbg"}></div>
      <div className={"banner_warp"}>
        {props.cur_language === "cn" ? (
          <p className={"goldx"}>
            <FormattedMessage id="bannerTitle1" />
            <span>
              <FormattedMessage id="bannerTitle2" />
            </span>
          </p>
        ) : (
            <p className={"goldx"}>
              <span>
                <FormattedMessage id="bannerTitle1" />
              </span>
              <FormattedMessage id="bannerTitle2" />
              <span>
                <FormattedMessage id="bannerTitle3" />
              </span>
            </p>
          )}
        <p>
          <FormattedMessage id="bannerSection1" />
        </p>
        <p>
          <FormattedMessage id="bannerSection2" />
        </p>
        <p>
          <FormattedMessage id="bannerSection3" />
        </p>
      </div>
      <div className={"m_warp"}>
        {
          props.cur_language === 'cn' ?
            <SvgIcon iconClass={"banner_cn"} /> :
            <SvgIcon iconClass={"banner_en"} />
        }

      </div>
      <div className={"btn_box"}>
        <a href="#" className={"btn active"}>
          <FormattedMessage id="WhitePaper" />
        </a>
        <a href="#" className={"btn"}>
          <FormattedMessage id="Mint" />
        </a>
        <a href="/dapp" className={"m_btn"}>
          <FormattedMessage id="SWAP" />
        </a>
      </div>
    </div>
  );
}
export default Banner;
