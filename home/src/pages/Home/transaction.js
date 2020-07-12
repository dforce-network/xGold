import React from "react";
import { FormattedMessage } from "react-intl";
import SvgIcon from "../../components/SvgIcon/index";
export default function Transaction() {
  return (
    <div className={"transaction"}>
      <div href="https://trade.dforce.network/" className={"trans_warp"}>
        <div className={"top"}></div>
        <div className={"banlance"}>
          <SvgIcon iconClass={"up"} />
          <FormattedMessage id="InsufficientBalance" />
        </div>
        <a href="https://trade.dforce.network/" className={"btn"}>
          <FormattedMessage id="SWAP" />
        </a>
      </div>
    </div>
  );
}
