{"source":"webpackJsonp([39],{\"QX+Q\":function(t,s,i){\"use strict\";Object.defineProperty(s,\"__esModule\",{value:!0});var e=i(\"p7Ml\"),a=i(\"O5qx\"),l=i(\"NeIm\"),c=i(\"JXx5\"),r=i(\"V7vM\"),n={name:\"CreditReportComponent\",data:function(){return{reportList:null,title:{contentText:\"信用报告\",rightText:\"发送\"}}},components:{TitleComponent:i(\"D7rtX\").a},created:function(){this.init()},methods:{init:function(){var s=this;l.a.send({url:\"QueryUDCreditReport\",data:{Token:r.a.token,key:e.a.ID}}).success(function(t){s.reportList=t}).fail(function(t){})},sendReport:function(){var t={target:a.a.target.id,id:e.a.ID,title:e.a.name+\"的信用报告\",money:e.a.name+\"的信用报告\"};a.a.creditReport(t).success(function(t){console.log(t),c.a.push(\"chat\")})}}},_=i(\"VU/8\")(n,{render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i(\"section\",{staticClass:\"credit-report padding-top-126\"},[i(\"TitleComponent\",{attrs:{title:t.title},on:{OTHER_EVENT:t.sendReport}}),t._v(\" \"),t._m(0),t._v(\" \"),i(\"ul\",{staticClass:\"report-default padding-horizontal-30 font-30\"},[t._m(1),t._v(\" \"),i(\"li\",{staticClass:\"default-item\"},[i(\"span\",[t._v(\"姓名:\")]),t._v(\" \"),i(\"span\",[t._v(t._s(t.reportList.names))])]),t._v(\" \"),i(\"li\",{staticClass:\"default-item\"},[i(\"span\",[t._v(\"性别:\")]),t._v(\" \"),i(\"span\",[t._v(t._s(t.reportList.gender))])]),t._v(\" \"),i(\"li\",{staticClass:\"default-item\"},[i(\"span\",[t._v(\"身份证号:\")]),t._v(\" \"),i(\"span\",[t._v(t._s(t.reportList.id_number))])]),t._v(\" \"),i(\"li\",{staticClass:\"default-item\"},[i(\"span\",[t._v(\"住址:\")]),t._v(\" \"),i(\"span\",[t._v(t._s(t.reportList.address))])]),t._v(\" \"),i(\"li\",{staticClass:\"default-item\"},[i(\"span\",[t._v(\"报告时间:\")]),t._v(\" \"),i(\"span\",[t._v(t._s(t.reportList.last_modified_time))])])]),t._v(\" \"),i(\"div\",{staticClass:\"report-risk\"},[t._m(2),t._v(\" \"),i(\"ul\",{staticClass:\"risk-list padding-horizontal-30\"},[t._m(3),t._v(\" \"),t._m(4),t._v(\" \"),t._m(5),t._v(\" \"),t._m(6),t._v(\" \"),t._m(7),t._v(\" \"),i(\"li\",{staticClass:\"list-item\"},[i(\"span\",{staticClass:\"itme-key\"},[t._v(\"[通话前十联系人]\")]),t._v(\" \"),i(\"ul\",{staticClass:\"item-group\"},t._l(t.reportList.callinfo_10,function(t,s){return i(\"li\",{key:s,staticClass:\"group-item\"})}))]),t._v(\" \"),t._m(8),t._v(\" \"),t._m(9),t._v(\" \"),t._m(10),t._v(\" \"),t._m(11),t._v(\" \"),t._m(12),t._v(\" \"),t._m(13),t._v(\" \"),t._m(14),t._v(\" \"),t._m(15),t._v(\" \"),t._m(16),t._v(\" \"),t._m(17),t._v(\" \"),t._m(18),t._v(\" \"),t._m(19),t._v(\" \"),t._m(20),t._v(\" \"),t._m(21),t._v(\" \"),t._m(22),t._v(\" \"),t._m(23),t._v(\" \"),t._m(24),t._v(\" \"),t._m(25),t._v(\" \"),t._m(26),t._v(\" \"),t._m(27),t._v(\" \"),t._m(28),t._v(\" \"),t._m(29)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s(\"div\",{staticClass:\"report-title padding-horizontal-30 font-30\"},[s(\"span\",[this._v(\"征信审核报告\")])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"default-item\"},[s(\"span\",[this._v(\"个人基本信息\")])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"div\",{staticClass:\"risk-title padding-horizontal-21\"},[s(\"p\",{staticClass:\"font-24 color-black padding-horizontal-21\"},[this._v(\"风险排查\")])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[评估模型得分]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[风险等级]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[用户特性]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[芝麻信用分]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[紧急联系人]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[使用手机号个数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[关联用户数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[其他关联设备数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[法院失信]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[网贷失信]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[活体攻击行为]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[名下银行卡数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[可疑设备]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[活体攻击设备]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[实际借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近3月实际借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近1月实际借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近6月实际借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[申请借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[还款次数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近3月还款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近3月申请借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近6月申请借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近1月还款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[还款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近6月还款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s(\"li\",{staticClass:\"list-item\"},[s(\"span\",{staticClass:\"itme-key\"},[this._v(\"[近1月申请借款平台数]\")]),this._v(\" \"),s(\"ul\",{staticClass:\"item-group\"},[s(\"li\",{staticClass:\"group-item\"})])])}]},!1,function(t){i(\"wsqT\")},\"data-v-742efbb9\",null);s.default=_.exports},wsqT:function(t,s){}});"}