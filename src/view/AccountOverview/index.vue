<template>
    <div>
        <div class="banner marginBox">
            <h3>Project Overview</h3>
            <p>Vehicle Leasing Project to Support Drivers in South East Asia</p>
        </div>

        <div class="main">
            <div class="top centerBetween">
                <div class="link">
                    <el-button type="text"
                               @click="$router.push('/home')"
                               style="color: #000;">&lt; HOME</el-button>
                </div>
                <div class="text centerBetween">
                    <h3>{{getEth}}ETH</h3>
                    <div class="text-btn">
                        <h3>NEXT HARVEST <span>Mar. 31, 2024</span></h3>
                        <!-- :class="getEth == 0 ? 'isZero' : ''" -->
                        <el-button @click="harvest"
                                   disabled
                                   class="isZero"
                                   type="text">HARVEST</el-button>
                    </div>
                </div>
            </div>
            <el-card class="article marginBottom">
                <div class="centerBetween">
                    <div class="car"><img src="@/assets/images/banner2.png"
                             alt=""></div>
                    <div class="articletext">
                        <h3>Vehicle Leasing Project to Support Drivers in South East Asia</h3>
                        <el-button type="text"
                                   @click="$router.push('/home')">Project Detail ></el-button>
                    </div>
                </div>
            </el-card>

            <div class="Portfolio marginBottom">
                <div class="title">
                    <div class="title-text">
                        <h3>Portfolio</h3>
                        <span class="title-time">Dec.12, 2024 - Now</span>
                    </div>
                    <el-select v-model="selectValue">
                        <el-option label="WEEK"
                                   value="WEEK"></el-option>
                    </el-select>
                </div>
                <el-card>
                    <div class="echartbox">
                        <COMINGSOON></COMINGSOON>
                        <div class="dataText">
                            <h3>
                                <img src="@/assets/images/up.svg">
                                <span>$1,520.14</span>
                            </h3>
                            <div class="dataText-change">
                                <p>Change</p>
                                <img src="@/assets/images/upMini.svg">
                                <span>$100,500.72</span>
                            </div>
                            <div class="dataText-change">
                                <p>EST.Returns</p>
                                <img src="@/assets/images/upMini.svg">
                                <span>$500.72</span>
                            </div>
                        </div>
                        <div style="height:600px;position: relative;z-index: 2;"
                             ref="Portfolio"></div>
                    </div>
                </el-card>
            </div>

            <div class="REPAYMENTTERMS marginBottom">
                <div class="column">REPAYMENT TERMS</div>
                <ul>
                    <li>
                        <p>LOAN TERM</p>
                        <h3>12 months</h3>
                        <i></i>
                    </li>
                    <li>
                        <p>PAYMENT FREQUENCY</p>
                        <h3>Monthly</h3>
                        <i></i>
                    </li>
                    <li>
                        <p>TERM START DATE</p>
                        <h3>Mar 1, 2024</h3>
                        <i></i>
                    </li>
                    <li>
                        <p>LOAN MATURITY DATE</p>
                        <h3>Feb 28, 2025</h3>
                        <i></i>
                    </li>
                    <li>
                        <p>REPAYMENT STRUCTURE</p>
                        <h3>Bullet</h3>
                        <i></i>
                    </li>
                    <li>
                        <p>TOTAL REPAYMENTS</p>
                        <h3>13</h3>
                        <i></i>
                    </li>
                </ul>
            </div>

            <div class="marginBottom">
                <div class="title">
                    <div class="title-text">
                        <h3>Repayment History</h3>
                    </div>
                </div>
                <div class="History"
                     style="position: relative">
                    <COMINGSOON></COMINGSOON>
                    <el-card class="left">
                        <div class="echartbox">
                            <div style="height:600px;position: relative;z-index: 2;"
                                 ref="History"></div>
                        </div>
                    </el-card>
                    <el-card class="right">
                        <el-table height='600'
                                  :data="historyData"
                                  style="width: 100%">
                            <el-table-column width="50px"
                                             show-overflow-tooltip
                                             type="index"
                                             label="#">
                            </el-table-column>
                            <el-table-column prop="EST"
                                             show-overflow-tooltip
                                             label="EST.payment date">
                            </el-table-column>
                            <el-table-column label="Principal due"
                                             show-overflow-tooltip>
                                <template slot-scope="{ row }">
                                    <span>${{ row.Principal }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="Interest due"
                                             show-overflow-tooltip>
                                <template slot-scope="{ row }">
                                    <span>${{ row.Interest }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </div>
            </div>

            <div class="marginBottom">
                <div class="title">
                    <div class="title-text">
                        <h3>Data House</h3>
                        <p>Data Collected via IoT Devices</p>
                    </div>
                    <ul class="SIMULATORlist">
                        <li>
                            <p class="color999">ASSET VALUE</p>
                            <h3>$43,500</h3>
                        </li>
                        <li>
                            <p class="color999">TOTAL NUMBER OF DRIVERS</p>
                            <h3>10</h3>
                        </li>
                        <li>
                            <p class="color999">TOTAL MILEAGE TRAVELED</p>
                            <h3>145,522 km</h3>
                        </li>
                    </ul>
                </div>
                <el-card>
                    <div class="house centerBetween">
                        <div class="car"><img src="@/assets/images/banner2.png"></div>
                        <div class="tableHouse">
                            <el-table ref="house"
                                      height='320'
                                      :data="houseData"
                                      style="width: 100%"
                                      @row-click="openModal"
                                      :row-class-name="tableRowClassName">
                                <el-table-column width="60px"
                                                 type="index"
                                                 show-overflow-tooltip
                                                 label="Asset">
                                </el-table-column>
                                <el-table-column label="dNFT ID"
                                                 show-overflow-tooltip>
                                    <template slot-scope="{row}">
                                        {{ row.newID }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Vehicle Model"
                                                 show-overflow-tooltip>
                                    <template slot-scope="{ row }">
                                        <span>{{ row.Model }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Amount"
                                                 show-overflow-tooltip>
                                    <template slot-scope="{ row }">
                                        <span>${{ row.Amount }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Status"
                                                 show-overflow-tooltip>
                                    <template slot-scope="{ row }">
                                        {{ row.Status }}
                                        <!-- <el-button type="text"
                                                   style="color: #000;font-size: 16px;letter-spacing: 0.42px;font-family:'Noto Sans'"
                                                   @click="openModal"></el-button> -->
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </el-card>
            </div>

            <div class="paddingBottom"
                 style="display: flex;justify-content: space-between;">
                <div class="mynft">
                    <div class="title">
                        <div class="title-text">
                            <h3>MY NFT</h3>
                            <p v-show="userSBTID"><a target="_blank"
                                   :href="`https://testnet.blastscan.io/nft/0x4d4679Bd8EA26070340eaE9b5c5564D6Dc5d2AD5/${userSBTID}`">#{{ userSBTID }}</a></p>
                        </div>
                    </div>
                    <el-card style="position: relative;"
                             :style="{'marginTop': userSBTID == null ? '25px' : '0px'}">
                        <not-mint v-if="userSBTID == null"></not-mint>
                        <div class="mynftCard">
                            <div class="mynftCard-img">
                                <img src="@/assets/images/nftcar.gif">
                            </div>
                            <div class="mynftCard-text">
                                <div>
                                    <p class="color999">LENDING AMOUNT</p>
                                    <h3>Testnet</h3>
                                </div>
                                <div>
                                    <p class="color999">PROJECT</p>
                                    <span>Vehicle Leasing Project to Support Drivers in South East Asia</span>
                                </div>
                                <ul>
                                    <li>
                                        <p class="color999">PROJECT</p>
                                        <span>Apas Port Inc.</span>
                                    </li>
                                    <li>
                                        <p class="color999">SINCE</p>
                                        <span>Mar, 2024</span>
                                    </li>
                                    <li>
                                        <p class="color999">RARITY</p>
                                        <div style="display: flex;"><img src="@/assets/images/blrst.svg"><span>Testnet(SBT)</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="update">
                    <div class="title">
                        <div class="title-text">
                            <h3>Project Update</h3>
                        </div>
                    </div>
                    <el-card style="margin-top: 25px;">
                        <div class="centerBetween updateItem">
                            <span class="time">2024.2.12</span>
                            <h3>We are joining Blast Big Bang Competition!!</h3>
                            <a href="https://twitter.com/HarvestFlow_io/status/1757405327320903705"
                               target="_blank"><img src="@/assets/images/updateIcon.svg"></a>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        <ModalDialog ref="Modal"></ModalDialog>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { claim } from '@/utils/contract'
import ModalDialog from './components/modal';
import * as echarts from 'echarts';
import { getPendingReward, userStaked, userSBTID, SBTUrl } from '@/utils/contract'
import { truncateString, daysSince } from '@/utils/app';
import COMINGSOON from './components/COMINGSOON'
import NotMint from './components/notMint.vue';
export default {
    name: 'AccountOverview',
    components: {
        COMINGSOON,
        ModalDialog,
        NotMint
    },
    computed: {
        ...mapGetters([
            'accountFilter'
        ]),
        ...mapState('web3', ['account', 'userSBTID', 'SBTUrl'])
    },
    data () {
        return {
            selectValue: 'WEEK',
            currentRow: null,
            historyData: [
                {
                    EST: 'Mar.31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                },
                {
                    EST: 'Apr.30, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'May 31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'June 30, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'July 31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Aug.31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Sep.30, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Oct.31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Sep.30, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Oct.31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Sep.30, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }, {
                    EST: 'Oct.31, 2024',
                    Principal: '0.00',
                    Interest: '15,289.24'
                }
            ],
            houseData: [{
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }, {
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }, {
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }, {
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }, {
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }, {
                ID: '0x12346465465464646789',
                Model: 'Test Model 1',
                Amount: '4,350',
                Status: 'OnGoing'
            }],
            getEth: 0,
            timer: null,
            timer2: null,
            timeDate: null
        }
    },
    watch: {
        accountFilter (newData) {
            if (newData) {
                this.userStaked()
                // this.getPendingReward()
            }
        }
    },
    mounted () {
        this.initEchartPortfolio()
        this.initEchartHistory()
        this.houseData.forEach(item => {
            item.newID = truncateString(item.ID)
        })
        if (this.accountFilter) {
            // this.getPendingReward()
            this.userStaked()
        }
    },
    destroyed () {
        clearInterval(this.timer)
        this.timer = null
        clearInterval(this.timer2)
        this.timer2 = null
    },
    methods: {
        initEchartPortfolio () {
            const myChart = echarts.init(this.$refs.Portfolio);
            const option = {
                backgroundColor: 'transparent',
                grid: { // 设置网格区域
                    width: '92%', // 设置宽度为80%
                    height: '92%', // 设置高度为60%
                    left: '4%',   // 左边距为10%
                    top: '0%'
                    // right: '10%',  // 右边距为10%
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: ' #000',
                            fontSize: '13',
                            fontFamily: "Noto Sans"

                        }
                    },
                    data: ['12 Dec.', '19 Dec.', '26 Dec.', '2 Jan.', '9 Jan.', '16 Jan.', '23 Jan.', '30 Jan.', '5 Feb.', '12 Feb.']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false,
                        inside: true
                    },
                    splitLine: {
                        show: false
                    },
                },
                series: [
                    {
                        data: [520, 520, 520, 920, 920, 920, 920, 920, 1520, 1520],
                        type: 'line',
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#325AB4 '
                                },
                                {
                                    offset: 1,
                                    color: '#1C1C64 '
                                }
                            ]),
                            borderRadius: [15, 15, 15, 15],
                            opacity: 1
                        },
                        step: true,
                    }
                ]
            };
            myChart.setOption(option);
        },
        initEchartHistory () {
            const myChart = echarts.init(this.$refs.History);
            const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            const PrincipalData = [300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 2100000,]
            const InterestData = [0, 2200000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
            const option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: (params) => {
                        let title = (params || [{ '': '未知' }])[0].axisValueLabel
                        let a = params.filter(_ => _.seriesName)
                            .map(_ => `${_.seriesName} $${_.value}`)
                            .join('</span><br/><span style="color:#000;font-size:16px">');
                        return `<p style='color:#999;font-size:13px'>Moth${title}</p><br/><span style='color:#000;font-size:16px'>${a}</span>`;
                    },
                    axisPointer: {
                        type: 'none'
                    }
                },
                legend: {
                    silent: true,
                    right: '10%',
                    icon: 'circle',
                    data: ['Principal', 'Interest'],
                },
                grid: {},
                yAxis: {
                    show: true,
                    type: 'value',
                    splitNumber: 5,
                    min: 0,
                    axisLabel: {
                        show: true,
                        inside: true,
                        align: 'center'
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xData
                    },
                    {
                        show: false,
                        type: 'category',
                        data: ['', '', '', '']
                    }
                ],
                series: [
                    { name: '', type: 'bar', show: false, barWidth: '20%', data: [0, 0, 0, 0], xAxisIndex: 0 },
                    {
                        name: 'Principal',
                        type: 'bar',
                        barWidth: '60%',
                        data: PrincipalData,
                        xAxisIndex: 0,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: '#1C1C64'
                                },
                                {
                                    offset: 1,
                                    color: '#325AB4'
                                }
                            ]),
                            barBorderRadius: [8, 8, 0, 0]
                        },
                        zlevel: 9
                    },
                    {
                        name: 'Interest',
                        type: 'bar',
                        barWidth: '20%',
                        data: InterestData,
                        xAxisIndex: 1,
                        itemStyle: {
                            color: '#82A5BE',
                            barBorderRadius: [8, 8, 0, 0]
                        },

                    },
                    { name: '', type: 'bar', show: false, barWidth: '20%', data: [0, 0, 0, 0], xAxisIndex: 0 },
                    { name: '', type: 'bar', show: false, barWidth: '20%', data: [0, 0, 0, 0], xAxisIndex: 1 },

                ]
            };
            myChart.setOption(option);
        },
        openModal () {
            this.$refs.Modal.openModal()
        },
        // 取出
        harvest () {
            if (this.getEth == 0) return
            this.getPendingReward()
            claim().cath((res) => {
                console.log(res)
            })
        },
        getPendingReward () {
            getPendingReward(this.account).then((res) => {
                if (res) {
                    this.getEth = String(res)
                    this.timer2 = setInterval(() => {
                        this.getEth = String(res)
                    }, 36000);
                }
            })
        },
        userStaked () {
            userStaked(this.account).then(res => {
                if (res[0] && res[1]) {
                    this.timeDate = daysSince(Number(res[2]) * 1000)
                    this.getEth = (0.001 * 0.05 / 365 * daysSince(Number(res[2]) * 1000)).toFixed(15)
                    this.timer = setInterval(() => {
                        if (this.timeDate < daysSince(Number(res[2]) * 1000)) {
                            this.getEth = (this.getEth * daysSince(Number(res[2]) * 1000)).toFixed(15)
                        }
                    }, 3600000);
                    userSBTID(this.account).then(res => {
                        if (Number(res) != 0) {
                            this.$store.commit('web3/saveuserSBTID', Number(res))
                            SBTUrl(res).then(e => {
                                this.$store.commit('web3/saveSBTUrl', e)
                            })
                        }
                    })
                } else {
                    this.getEth = 0
                    this.$store.commit('web3/saveuserSBTID', null)
                    this.$store.commit('web3/saveSBTUrl', null)
                }
            })
        },
        tableRowClassName ({ rowIndex }) {
            if (rowIndex % 2) {
                return '';
            } else {
                return 'blue-row';
            }
        }
    }
}
</script>

<style lang="sass" scoped>
::v-deep.el-table .blue-row
    background-color: #EDF3F7!important
// ::v-deep.el-table .success-row
//     background: #fff

.marginBottom
    margin-bottom: 80px
.paddingBottom
    padding-bottom: 80px
.color999
    color: var(--TEXT_GREY, #999)
    /* text_small */
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 23.4px */
    letter-spacing: 0.39px
:deep  .el-table__body-wrapper::-webkit-scrollbar
    width: 8px // 横向滚动条
    height: 8px // 纵向滚动条必写
// 2、定义滚动条轨道 内阴影+圆角
:deep  .el-table__body-wrapper::-webkit-scrollbar-track
    box-shadow: 0px 1px 3px #E1EBF2 inset
    border-radius: 6px
    background-color: #E1EBF2

// 3、定义滑块 内阴影+圆角
:deep .el-table__body-wrapper::-webkit-scrollbar-thumb
    box-shadow: 0px 1px 3px #00a0e9 inset
    border-radius: 10px
    background-color: #325AB4
// 4、表头的后面小空白
:deep .el-table__cell.gutter
    background-color: transparent //表头的后面小空白颜色修改
.el-card
    border-radius: 15px
    & ::v-deep .el-card__body
        padding: 0
.top
    padding: 30px 0

.column
    position: relative
    padding-left: 30px
    color: var(--TEXT_BLACK, #282828)
    font-family: "PlusJakartaSansRegular"
    font-size: 12px
    font-style: normal
    font-weight: 600
    line-height: normal
    letter-spacing: 0.6px
    text-transform: uppercase
    padding-bottom: 12px
.column:after
    content: ''
    display: block
    position: absolute
    top: 27%
    left: 0
    width: 20px
    height: 1px
    flex-shrink: 0
    background: #282828
.REPAYMENTTERMS
    padding: 30px
    box-sizing: border-box
    border-radius: 15px
    background: #fff
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05)
.REPAYMENTTERMS ul
    display: flex
    flex-wrap: wrap

    & li
        position: relative
        margin-top: 24px
        margin-right: 24px
        padding-left: 30px
        box-sizing: border-box
        width: calc(25% - 24px)
        border-bottom: 1px solid #dee0e2

    & li i
        display: block
        position: absolute
        right: 0
        top: 0
        width: 1px
        height: 80%
        background: #dee0e2
.REPAYMENTTERMS ul li p
    color: var(--TEXT_GREY, #999)
    /* text_small */
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 23.4px */
    letter-spacing: 0.39px

.REPAYMENTTERMS ul li h3
    color: var(--TEXT_BLACK, #282828)
    /* heading_small */
    font-family: "Noto Sans"
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: 180%
    /* 36px */
    margin-bottom: 20px
    letter-spacing: 0.6px
.title
    display: flex
    justify-content: space-between
    align-items: flex-end
    padding-bottom: 30px
    & .title-text
        & h3
            color: #000
            font-family: "PlusJakartaSansBlod"
            font-size: 40px
            font-style: normal
            font-weight: 800
            line-height: 130%
            letter-spacing: -0.4px
        & .title-time
            color: #999
            font-size: 20px
            font-style: normal
            font-weight: 700
            line-height: 180%
            letter-spacing: 0.6px
    & .el-select
        width: 10%
        & ::v-deep .el-input__inner
            background-color: transparent
            border: none
            font-family: Noto Sans
            color: var(--TEXT_BLACK, #282828)
            font-size: 16px
            font-style: normal
            font-weight: 400
            line-height: 180%
            letter-spacing: 0.48px
        & ::v-deep .el-select__caret
            color: #282828
.banner
    display: flex
    align-items: center
    padding-top: 75px
    padding-bottom: 75px

    & h3
        color: #325AB4
        font-family: "PlusJakartaSansBlod"
        font-size: 40px
        font-style: normal
        font-weight: 800
        line-height: 130%
         /* 52px */
        letter-spacing: -0.4px

    & p
        margin-left: 30px
        color: #999
        /* text */
        font-family: "Noto Sans"
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 180%
         /* 28.8px */
        letter-spacing: 0.48px

.main
    padding: 0 10%
    background-color: rgb(237,243,247)

.text
    align-items: end
    & > h3
        text-align: center
        font-family: "PlusJakartaSansBlod"
        font-size: 40px
        font-style: normal
        font-weight: 800
        line-height: 130%
        letter-spacing: -0.4px
        background: var(--HAPPY_GRADIENT, linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%))
        background-clip: text
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
.text-btn
    margin-left: 18px
    & > h3
        font-size: 13px
        text-align: center
        font-style: normal
        font-weight: 400
        line-height: 180%
        letter-spacing: 0.39px
        background: var(--HAPPY_GRADIENT, linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%))
        background-clip: text
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        & span
            font-size: 16px
            letter-spacing: 0.48px
    & .el-button
        width: 235px
        height: 58px
        padding: 4px 12px
        text-align: center
        color: #fff
        font-size: 20px
        font-style: normal
        font-weight: 700
        line-height: 180%
        letter-spacing: 0.6px
        border-radius: 100px
        background: linear-gradient(to right, #FFD700, #FFA500)
        // background: var(--HAPPY_GRADIENT, linear-gradient(0deg, rgba(50, 89, 180, 0.25) 0%, rgba(50, 89, 180, 0.25) 100%), linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%))
        &:hover
            background: linear-gradient(to right, #FFD700, #FFA500)
            // background: linear-gradient(82.38deg, #30BAE6 -0.19%, #D6ACFF 99.05%),linear-gradient(0deg, rgba(50, 89, 180, 0.25), rgba(50, 89, 180, 0.25))
    & .isZero
        background: linear-gradient(82deg, rgba(139, 139, 139, 0.50) -0.19%, rgba(214, 214, 214, 0.50) 99.05%)

.article
    position: relative
    & .car
        padding: 30px
        box-sizing: border-box
        width: 25%
        background: #E1EBF2
    & .articletext
        width: 70%
        height: 100%
        padding: 30px
        & > h3
            color: #282828
            font-family: "PlusJakartaSansBlod"
            font-size: 40px
            font-style: normal
            font-weight: 800
            line-height: 130%
            letter-spacing: -0.4px
        & .el-button
            position: absolute
            right: 30px
            bottom: 10px
            color: #282828
            font-size: 16px
            font-family: Noto Sans
            font-style: normal
            font-weight: 400
            line-height: 180%
            letter-spacing: 0.48px
.echartbox
    padding: 30px
    position: relative
.History
    display: flex
    justify-content: space-between
    & .left
        width: 60%
    & .right
        padding: 30px
        box-sizing: border-box
        width: 38%
.SIMULATORlist
    display: flex

    & li
        margin-left: 40px

    & li h3
        padding-top: 5px
        color: #161520
        font-size: 20px
        font-style: normal
        font-weight: 800
        line-height: 130%
        /* 52px */
        letter-spacing: 0.6px

    & li h3 span
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        letter-spacing: 0.39px
::v-deep.el-table
    .el-table__body-wrapper
        & tr
            padding: 15px 0
            color: #000
            font-size: 16px
            letter-spacing: 0.42px
            & .el-table__cell
                padding: 20px 0

.house
    padding: 30px
    box-sizing: border-box
    & .car
        width: 25%
        padding: 40px
        box-sizing: border-box
        border-radius: 15px
        background: #E1EBF2
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05)
    & .tableHouse
        width: 70%
.mynft
    width: 30%
.update
    width: 68%
    & .updateItem
        padding: 30px
        & .time
            width: 10%
            color: #999
            font-size: 13px
        & h3
            width: 80%
            color: #000
            font-size: 20px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
.mynftCard
    & .mynftCard-text
        padding: 10px
        box-sizing: border-box
        & > div h3
            color: #282828
            font-size: 20px
            font-weight: 700
            letter-spacing: 0.6px
        & > ul
            display: flex
            & > li
                width: 30%
                display: flex
                flex-direction: column
                & img
                    width: 51%
                    display: inline-block
                & span
                    font-size: 12px
    & .mynftCard-img
        height: 280px
        border-radius: 15px 15px 0 0
        overflow: hidden
        img
            height: 100%
            object-fit: cover

.Portfolio
    .dataText
        position: absolute
        top: 30px
        left: 80px
        & h3
            display: flex
            align-items: center
            width: 230px
            font-family: "PlusJakartaSansBlod"
            font-size: 40px
            font-weight: 800
            line-height: 130%
            letter-spacing: -0.4px
            background: var(--HAPPY_GRADIENT, linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%))
            background-clip: text
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent
            & span
                margin-left: 20px
            & img
                width: 23px
                height: 20px
        & .dataText-change
            margin-top: 10px
            display: flex
            align-items: center
            & img
                margin: 0 20px
                width: 11px
                height: 10px
            & span
                font-size: 20
                font-weight: 600
            & p
                font-size: 12px
</style>
