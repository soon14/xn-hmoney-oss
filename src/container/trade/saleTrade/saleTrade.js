import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/trade/saleTrade/saleTrade';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.tradeSaleTrade,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class SaleTrade extends React.Component {
    render() {
        const fields = [{
            title: '发布人',
            field: 'userId',
            type: 'select',
            pageCode: '805120',
            params: {
                updater: '',
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{mobile.DATA}}--{{nickname.DATA}}',
            searchName: 'mobile',
            render: (v, data) => {
                if (data.user) {
                    return data.user.mobile + '(' + data.user.nickname + ')';
                }
            },
            search: true
        }, {
            field: 'tradeCoin',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'coin',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            search: true,
            noVisible: true
        }, {
            title: '售卖总量',
            field: 'totalCountString',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin);
            }
        }, {
            field: 'leftCountString',
            title: '剩余可售卖',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin);
            }
        }, {
            title: '行情价格',
            field: 'marketPrice'
        }, {
            title: '溢价率',
            field: 'premiumRate'
        }, {
            title: '保护价',
            field: 'protectPrice'
        }, {
            title: '单笔最大量',
            field: 'maxTrade'
        }, {
            title: '单笔最小量',
            field: 'minTrade'
        }, {
            title: '可交易的对象',
            field: 'onlyTrust',
            type: 'select',
            data: [{
                'key': '0',
                'value': '任何人都可以交易'
            }, {
                'key': '1',
                'value': '只有受信任的人可以交易'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'payType',
            title: '支付方式',
            type: 'select',
            data: [{
                'key': '0',
                'value': '支付宝'
            }, {
                'key': '1',
                'value': '微信'
            }, {
                'key': '2',
                'value': '银行卡转账'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            title: '状态',
            field: 'status',
            type: 'select',
            key: 'ads_status',
            search: true
        }, {
            title: '最后更新时间',
            field: 'updateDatetime',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            pageCode: '625225',
            searchParams: {
                tradeType: '1'
            }
        });
    }
}

export default SaleTrade;