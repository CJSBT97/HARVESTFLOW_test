<template>
    <div>
        <div class="banner">
            <img src="@/assets/images/banner.png">
            <div class="bannerText">
                <h3>Vehicle Leasing Project</h3>
                <h3>to Support Drivers in</h3>
                <h3>South East Asia</h3>
            </div>
            <p class="text">Tentative: All images and contents will be updated later.</p>
        </div>
        <div class="swiperBox marginUp">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/assets/images/silde.png"></div>
                    <div class="swiper-slide"><img src="@/assets/images/silde2.png"></div>
                    <div class="swiper-slide"><img src="@/assets/images/silde3.png"></div>
                    <div class="swiper-slide"><img src="@/assets/images/silde4.png"></div>
                    <div class="swiper-slide"><img src="@/assets/images/silde5.png"></div>
                    <div class="swiper-slide"><img src="@/assets/images/silde6.png"></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- 如果需要滚动条 -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
        </div>

        <div class="content marginUp marginBox">
            <div class="contentLeft">
                <div class="column">About The Project</div>
                <h3>A Leap Towards <br> Financial Inclusion</h3>
                <h4>Challenges Harvest Flow Solves</h4>
                <p>
                    Over 1.7 billion people globally lack access to financial services, hindering their ability to improve
                    their quality of life through essential purchases like vehicles or homes. In regions like Southeast
                    Asia, the impact of financial exclusion is profound, where owning a vehicle can mean the difference
                    between poverty and providing for a family.<br>
                    Apas Port's Harvest Flow aims to change this.<br>
                    Harvest Flow is a NFT-Fi lending service designed to democratize access to finance. By leveraging Web3.0
                    technologies, we aim to significantly reduce borrowing costs and simplify the lending process, ensuring
                    transparency and efficiency within a regulatory framework.
                </p>
                <img src="@/assets/images/image51.jpg"
                     style="margin: 32px 0;">
                <div class="centerBetween">
                    <div>
                        <h4>Harvest Flow’s Revolutionary Approach to Lending</h4>
                        <p>
                            In the heart of Harvest Flow lies a groundbreaking approach to lending. Imagine a world where
                            your
                            investments are not just numbers on a screen but tangible assets you can monitor in real time.
                            We've
                            made this possible by embedding IoT devices in each asset financed through our platform. These
                            devices provide 24/7 location and usage data, ensuring transparency and security for both
                            lenders
                            and borrowers.
                        </p>
                    </div>
                    <img style="width: 233px;height: 188px;;"
                         src="@/assets/images/image74.png">
                </div>
                <div class="centerBetween">
                    <img src="@/assets/images/image81.png"
                         style="margin-right: 30px;margin-top: 30px;width: 126px;
height: 132px;">
                    <p>
                        But how do we link these real-world assets to the digital space of finance? Through NFTs. Each
                        loan or lease contract is represented as an NFT, turning these agreements into verifiable,
                        secure digital assets on the blockchain. This not only simplifies the management of contracts
                        but also opens new avenues for investors to engage with and monitor their investments.
                    </p>
                </div>
                <img style="margin: 32px 0;"
                     src="@/assets/images/image85.jpg">
                <img src="@/assets/images/image99.png">
            </div>
            <div class="contentRight">
                <div class="column">OVERVIEW</div>
                <div class="rightText">
                    <p>PROGRESS</p>
                    <h3>-%</h3>
                </div>
                <div class="rightText">
                    <p>APR</p>
                    <h3>5.0% (SAMPLE)</h3>
                </div>
                <div class="rightText">
                    <p>CATEGORY</p>
                    <h3>AUTO LEASE</h3>
                </div>
                <div class="rightText">
                    <p>OPERATED BY</p>
                    <h3>Apas Port Inc.</h3>
                </div>
                <div class="rightText">
                    <p>CAPACITY</p>
                    <h3>-ETH</h3>
                </div>
                <div class="rightText">
                    <p>OPERATION TERM</p>
                    <h3>1 YEAR</h3>
                </div>
                <div class="rightText">
                    <p>STATUS</p>
                    <h3>OPEN FOR INVESTMENT
                        Closing end of Feb.</h3>
                </div>
                <div class="rightText">
                    <p>OPERATION STARTS ON</p>
                    <h3>1st Mar. 2024</h3>
                </div>
                <div class="rightText">
                    <p>OPERATION ENDS ON</p>
                    <h3>28th Feb. 2025</h3>
                </div>
                <div class="column"
                     style="margin-top: 48px;">PAYMENT</div>
                <div class="PAYMENT">
                    <isPAYMENT v-if="!accountFilter"></isPAYMENT>
                    <div class="clickChange">
                        <el-button-group>
                            <el-button @click="clickChange('LEND')"
                                       :class="currentName == 'LEND' ? 'clickCurrent' : ''"
                                       type="text">LEND</el-button>
                            <el-button @click="clickChange('WITHDRAW')"
                                       :class="currentName == 'WITHDRAW' ? 'clickCurrent' : ''"
                                       type="text">WITHDRAW</el-button>
                        </el-button-group>
                    </div>
                    <p class="Investment">Your Investment: 0 ETH</p>
                    <div class="PAYMENTButtonEth centerBetween">
                        <div class="icon"><img src="@/assets/images/image66.png"></div>
                        <div class="text">
                            <p>0.001</p>
                            <span>ETH</span>
                        </div>
                    </div>
                    <div class="centerBetween max">
                        <p class="color2828">Your Balance 15,000 Ether</p>
                        <a>MAX</a>
                    </div>
                    <p class="color2828">0.001 eth per Wallet</p>
                    <div class="total">
                        <h4 class="color999">Total Rewards</h4>
                        <!-- 这里需要获取一天内的收益 -->
                        <h3>{{ getEth }}<span>ETH</span></h3>
                    </div>
                    <!-- todo 这里是sumbit -->
                    <template v-if="isSubmit && !staked">
                        <p class="color999"
                           style="margin: 9px 0;">
                            This product is currently in a testnet version, so the data and program behavior may not be accurate.
                            We are not responsible for any damage caused by these issues.
                        </p>
                        <el-button class="submit"
                                   @click="SUBMIT">SUBMIT</el-button>
                    </template>
                    <template v-else>
                        <p class="color999"
                           style="margin: 9px 0;color: #282828;font-weight: 700;">
                            You already have minted Blast Big Bang NFT. We limit one NFT per user in Blast testnet.
                        </p>
                        <el-button class="submit"
                                   @click="AccountPage">Go to Account Page</el-button>
                    </template>
                </div>
            </div>
        </div>

        <div class="Overview">
            <h3 class="OverviewColor000">Overview</h3>
            <div class="overViewBox REPAYMENTTERMS">
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
            <div class="towBox">
                <div class="overViewBox">
                    <div class="column">RETURN SIMULATOR</div>
                    <h3 class="OverviewColor000"
                        style="font-family: 'PlusJakartaSansBlod';">You can create a simulation of
                        return you will be getting by entering
                        lending amount.</h3>
                    <p class="color999"
                       style="margin-top: 24px;">LENDING AMOUNT</p>
                    <h3 class="AMOUNT-H3">{{value}}<span>ETH</span></h3>
                    <el-slider :max="1000"
                               :min="0"
                               @input="handleChangeSilder"
                               v-model="value">
                    </el-slider>
                    <ul class="SIMULATORlist">
                        <li>
                            <p class="color999">EXPECTED APY</p>
                            <h3>5.0 <span>%</span></h3>
                        </li>
                        <li>
                            <p class="color999">CONTRACT TERM</p>
                            <h3>1 <span>YEARS</span></h3>
                        </li>
                        <li>
                            <p class="color999">EXPECTED RETURN</p>
                            <h3>{{ silderNum }}<span>ETH</span></h3>
                        </li>
                    </ul>
                </div>
                <div class="overViewBox">
                    <div class="title"
                         style="display: flex;
    align-items: flex-start;
    justify-content: space-between;">
                        <div class="column">Transaction History</div>
                        <el-button style="padding: 0"
                                   type="text"><img src="@/assets/images/historyIcon.svg"></el-button>
                    </div>
                    <el-table v-show="historyListData.length > 0 "
                              ref="house"
                              class="HistoryList"
                              height='460'
                              :data="historyListData"
                              style="width: 100%">
                        <el-table-column show-overflow-tooltip
                                         width="60px">
                            <template>
                                <i class="face"><img style="width: 40px; height: 40px"
                                         src="@/assets/images/face.png"></i>
                            </template>
                        </el-table-column>
                        <el-table-column show-overflow-tooltip>
                            <template slot-scope="{ row }">
                                {{ row.userAddress }}
                            </template>
                        </el-table-column>
                        <el-table-column show-overflow-tooltip>
                            <template slot-scope="{row}">
                                <div :class="row.btn == 'Lend' ? 'btn' : 'HARVEST'">{{ row.btn }}</div> <!-- 这块 leng 和 HARVEST 展示有区别 -->
                            </template>
                        </el-table-column>
                        <el-table-column show-overflow-tooltip
                                         width="220px">
                            <template slot-scope="{row}">
                                <h4>{{ row.amount }} ETH</h4>
                            </template>
                        </el-table-column>
                        <el-table-column show-overflow-tooltip>
                            <template slot-scope="{row}">
                                <p class="time">{{ row.timestamp }}</p>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- <ul class="HistoryList">
                        <li v-for="(item, index) in historyListData"
                            :key="index">
                            <i class="face"><img src="@/assets/images/face.png"></i>
                            <p>{{ item.userAddress }} </p>
                            <div :class="item.btn == 'Lend' ? 'btn' : 'HARVEST'">{{ item.btn }}</div>
                            <h4>{{ item.amount }} ETH</h4>
                            <p class="time">{{ item.timestamp }}</p>
                        </li>
                    </ul> -->
                </div>
            </div>
            <div class="overViewBox">
                <div class="column">Project OWNER</div>
                <div class="owwer">
                    <div class="icon"><img src="@/assets/images/image69.png"></div>
                    <div class="text">
                        <h4>Apas Port Inc.</h4>
                        <p>Apas Port Inc. is a Web3 creative production company founded with the goal of deploying
                            excitement to the new world created by smart contracts. The founding members, brought together
                            through DAOs (Decentralized Autonomous Organizations), are professionals with a proven track
                            record of selling out many NFT projects and have extensive web3 content production experience
                            and network.</p>
                        <div class="link">
                            <a href="https://apasport.xyz/"
                               target="_blank"><img src="@/assets/images/solar_link-bold.png"
                                     style="padding-right: 13px;">apasport.xyz</a>
                            <a href="https://x.com/ApasPort_Web3"
                               target="_blank"><img src="@/assets/images/X.svg"
                                     style="padding-right: 13px;" /><span>apasport</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CongratulationsDialog ref="CongratulationsDialog"></CongratulationsDialog>
    </div>
</template>

<script>
import Swiper from 'swiper'
import { truncateString } from '@/utils/app';
import isPAYMENT from './components/isPAYMENT'
import { stake, getTransctions, getPendingReward, userStaked, userSBTID, SBTUrl } from '@/utils/contract'
import { parseTimestamp } from '@/utils/helper'
import { mapGetters, mapState } from 'vuex'
import CongratulationsDialog from './components/Congratulations'

export default {
    name: 'PageDetail',
    components: {
        isPAYMENT,
        CongratulationsDialog
    },
    computed: {
        ...mapGetters([
            'accountFilter'
        ]),
        ...mapState('web3', ['account', 'userSBTID', 'SBTUrl'])
    },
    data () {
        return {
            value: 0,
            silderNum: 0,
            currentName: 'LEND',
            isSubmit: true,
            historyListData: [],
            getEth: '-',  // 更新每天收益的值
            staked: false, // 表示用户执行过质押
            staking: false, // 表示用户质押后取消了质押
            timer: null
        }
    },
    watch: {
        accountFilter (newData) {
            if (newData) {
                this.getHistoryList()
                this.isSubmit = true
                userStaked(this.account).then(res => {
                    this.staked = res[0]
                })
                this.getPendingReward()
                this.getUserSBTID()
            }
        }
    },
    mounted () {
        this.initSwiper()
        if (this.accountFilter) {
            this.getHistoryList()
            this.isSubmit = true
            userStaked(this.account).then(res => {
                this.staked = res[0]
            })
            this.getPendingReward()
        }
    },
    destroyed () {
        clearInterval(this.timer)
        this.timer = null
    },
    methods: {
        handleChangeSilder () {
            this.silderNum = (this.value * 0.05).toFixed(2)
        },
        clickChange (name) {
            this.currentName = name
        },
        initSwiper () {
            new Swiper('.swiper', {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                spaceBetween: 30,
                slidesPerView: 2,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    type: "fraction",
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            })
        },
        SUBMIT () {
            this.isSubmit = false
            if (this.staked) {
                this.getPendingReward()
            } else {
                stake().catch((err) => {
                    console.log(err)
                })
                this.showCongratulationsDialog()
            }
        },
        showCongratulationsDialog () {
            this.timer = setInterval(() => {
                userStaked(this.account).then(res => {
                    if (res[1]) {
                        this.$refs.CongratulationsDialog.showDialog()
                        clearInterval(this.timer)
                        this.timer = null
                    }
                })
            }, 3600)
        },
        getPendingReward () {
            getPendingReward(this.account).then((res) => {
                if (Number(res) > 0) {
                    this.getEth = Number(res).toFixed(15)
                }
            })
        },
        AccountPage () {
            this.$router.push('/AccountOverview')
            // this.timer = setInterval(() => {
            //     userStaked(this.account).then(res => {
            //         if (res[1]) {
            //             this.$refs.CongratulationsDialog.showDialog()
            //             clearInterval(this.timer)
            //             this.timer = null
            //         }
            //     })
            // }, 3600)
        },
        // 获取历史信息
        getHistoryList () {
            getTransctions().then((resPromise) => {
                const ethers = require('ethers');
                const newArry = []
                resPromise.forEach(transaction => {
                    let data = {}
                    switch (Number(transaction[0])) {
                        case 1:
                            data.btn = 'Lend'
                            break
                        case 2:
                            break
                        case 3:
                            data.btn = 'HARVEST'
                            break
                        default:
                            break
                    }
                    data.transactionType = Number(transaction[0]); // 交易类型
                    data.userAddress = truncateString(transaction[1]); // 用户地址
                    data.timestamp = parseTimestamp(Number(transaction[2]) * 1000); // 时间戳
                    if ((ethers.formatEther(transaction[3])).length > 15) {
                        data.amount = Number(ethers.formatEther(transaction[3])).toFixed(15); // 金额
                    } else {
                        data.amount = Number(ethers.formatEther(transaction[3])) // 金额
                    }

                    newArry.push(data)
                });
                this.historyListData = JSON.parse(JSON.stringify(newArry))
            }).catch(() => {

            })
        },
        getUserSBTID () {
            userSBTID(this.account).then(res => {
                if (Number(res) != 0) {
                    this.$store.commit('web3/saveuserSBTID', Number(res))
                    SBTUrl(res).then(e => {
                        this.$store.commit('web3/saveSBTUrl', e)
                    })
                }
            })
        }
    }
}
</script>
<style lang="sass" scoped>
:deep .el-table::before
    background: transparent
:deep.el-table td.el-table__cell, :deep.el-table th.el-table__cell.is-leaf
    border: none
:deep.el-table .el-table__cell
    padding: 16px 0
:deep .el-table__header-wrapper
    display: none
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
.banner
    position: relative
    text-align: center

    & &Text
        width: 100%
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        color: #FFF
        text-align: center
        font-family: "Plus Jakarta Sans"
        font-size: 96px
        font-style: normal
        font-weight: 800
        line-height: 130%
        letter-spacing: -0.96px

    & .text
        position: absolute
        bottom: 3%
        left: 50%
        transform: translate(-50%, -3%)
        color: #FFF
        font-family: "Noto Sans"
        font-size: 13px
        line-height: 180%
        letter-spacing: 0.39px
        opacity: 0.5

    & img
        width: 100%

.swiperBox
    overflow: hidden
    position: relative
    width: 80%
    margin-left: 10%
    margin-right: 10%

.swiper
    width: 120%
    height: 500px
    position: static !important
    padding-bottom: 100px !important

    &-slide
        text-align: center
        font-size: 18px
        background: #fff
        display: flex
        justify-content: center
        align-items: center

    &-slide img
        display: block
        width: 100%
        // height: 100%
        object-fit: cover

    &-pagination-current
        padding-right: 50px

    &-pagination-total
        padding-left: 50px

.swiper-button-next:after,
.swiper-button-prev:after
    color: #000
    font-size: 25px !important
    font-weight: 700

.swiper-button-prev,
.swiper-button-next
    top: calc(100% - 18px) !important

.swiper-button-prev
    left: 38% !important

.swiper-button-next
    right: 38% !important
::v-depp.swiper-pagination > .swiper-pagination-total
    padding-left: 70px!important

::v-depp.swiper-pagination > .swiper-pagination-current
    padding-right: 70px!important
.swiperBox .swiper-pagination-current
    font-size: 20px !important

.content
    display: flex
    justify-content: space-between

    &Left
        width: 70%

    &Right
        width: 25%

.column
    position: relative
    padding-left: 40px
    color: var(--TEXT_BLACK, #282828)
    font-family: "PlusJakartaSansRegular"
    font-size: 12px
    font-style: normal
    font-weight: 600
    line-height: normal
    letter-spacing: 0.6px
    text-transform: uppercase
    padding-bottom: 40px
.column:after
    content: ''
    display: block
    position: absolute
    top: 14%
    left: 0
    width: 20px
    height: 1px
    flex-shrink: 0
    background: #282828

.contentLeft h3
    padding: 19px 0 20px 0
    color: var(--TEXT_BLACK, #282828)
    font-family: "PlusJakartaSansRegular"
    font-size: 40px
    font-style: normal
    font-weight: 800
    line-height: 130%
    /* 52px */
    letter-spacing: -0.4px

.contentLeft h4
    color: var(--MAIN_BLUE, #3259b4)
    /* heading_small */
    font-family: "Noto Sans"
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: 180%
    /* 36px */
    letter-spacing: 0.6px

.contentLeft p
    margin-top: 16px
    color: var(--TEXT_BLACK, #282828)
    /* text */
    font-family: "Noto Sans"
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 28.8px */
    letter-spacing: 0.48px

.rightText
    padding: 12px 0
    border-bottom: 1px solid #e6e6e6

.rightText p,
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

.rightText h3,
.REPAYMENTTERMS ul li h3
    color: var(--TEXT_BLACK, #282828)
    /* heading_small */
    font-family: "Noto Sans"
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: 180%
    /* 36px */
    letter-spacing: 0.6px

.clickChange
    display: flex
    overflow: hidden
    border-radius: 20px
    background: #d9d9d9
    height: 40px

    & .el-button-group
        width: 100%
        & .el-button
            width: 50%
            color: #fff
            text-align: center
            font-family: "PlusJakartaSansRegular"
            font-size: 14px
            font-style: normal
            font-weight: 600
            /* 25.2px */
            letter-spacing: 0.42px

.clickCurrent
    background: #3259b4

.Investment
    color: #282828
    text-align: right
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    letter-spacing: 0.39px
    padding: 9px 0

.PAYMENTButtonEth
    padding: 0 20px
    box-sizing: border-box
    width: 100%
    height: 56px
    flex-shrink: 0
    border-radius: 8px
    border: 1px solid rgba(0, 0, 0, 0.1)
    background: #f6fbff

    & .icon
        width: 30px
        height: 30px
        overflow: hidden

    & .icon img
        width: 100%

    & .text
        width: calc(100% - 30px)
        display: flex
        align-items: baseline

    & span
        color: #161520
        font-family: "Noto Sans"
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        letter-spacing: 0.39px

    & P
        width: calc(100% - 30px)
        color: #161520
        text-align: right
        font-family: "PlusJakartaSansRegular"
        font-size: 24px
        font-style: normal
        font-weight: 400
        line-height: 130%
        /* 31.2px */
        letter-spacing: -0.24px

.color999
    color: #999
    /* text_small */
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 23.4px */
    letter-spacing: 0.39px

.color2828
    color: var(--TEXT_BLACK, #282828)
    /* text_small */
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 23.4px */
    letter-spacing: 0.39px

.max
    padding: 9px 0

    & a
        color: #3259b4
        /* text_small */
        font-family: "Noto Sans"
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        /* 23.4px */
        letter-spacing: 0.39px

.total
    padding: 20px 0 24px 0
    border-bottom: 1px solid #e5e5e5

    & h3
        text-align: center
        color: var(--MAIN_BLUE, #3259b4)
        /* heading_en-only */
        font-family: "PlusJakartaSansRegular"
        font-size: 25px
        font-weight: 800
        line-height: 130%
        /* 52px */
        letter-spacing: -0.4px

    & span
        padding-left: 10px
        color: var(--MAIN_BLUE, #3259b4)
        /* text_small */
        font-family: "Noto Sans"
        font-size: 13px
        font-weight: 400
        line-height: 180%
        /* 23.4px */
        letter-spacing: 0.39px

.submit
    display: flex
    width: 100%
    height: 58px
    padding: 15px 86px
    justify-content: center
    align-items: center
    gap: 10px
    flex-shrink: 0
    border-radius: var(--Border-Radius-Round, 100px)
    background: var(--MAIN_BLUE, #3259b4)
    color: #fff
    text-align: center
    font-family: "PlusJakartaSansRegular"
    font-size: 16px
    font-style: normal
    font-weight: 700
    line-height: normal
    letter-spacing: 1.6px
    cursor: pointer

    &:hover
        opacity: 0.8

.Overview
    margin-top: 120px
    padding: 38px 10% 120px 10%
    background: var(--BG_LIGHT_GREY_Layer0, #ecf1f5)

    & h3
        margin-bottom: 20px

    &Color000
        color: #000
        /* heading_en-only */
        font-family: "PlusJakartaSansRegular"
        font-size: 40px
        font-style: normal
        font-weight: 800
        line-height: 130%
        /* 52px */
        letter-spacing: -0.4px

.overViewBox
    padding: 30px
    margin-bottom: 20px
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

.towBox
    display: flex
    justify-content: space-between

    & > div
        width: calc(50% - 10px)

.owwer
    display: flex
    justify-content: space-between

    & .icon
        overflow: hidden
        display: flex
        justify-content: center
        align-items: center
        border-radius: 50%
        border: 1px solid #dee0e2
        width: 180px
        height: 180px

    & .icon img
        width: 60%

    & .text
        width: calc(100% - 220px)

    & .text h4
        color: #000
        /* heading_small */
        font-family: "Noto Sans"
        font-size: 20px
        font-style: normal
        font-weight: 700
        line-height: 180%
        /* 36px */
        letter-spacing: 0.6px

    & .text p
        padding: 18px 0
        overflow: hidden
        color: var(--Text-2, #22252d)
        text-overflow: ellipsis
        /* text */
        font-family: "Noto Sans"
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 180%
        /* 28.8px */
        letter-spacing: 0.48px

    & .text .link
        display: flex

    & .text .link a
        margin-right: 20px

    & .text .link img
        width: 19px
        height: 17px
.HistoryList p
    color: var(--TEXT_BLACK, #282828)
    font-family: "Noto Sans"
    font-size: 13px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 23.4px */
    letter-spacing: 0.39px

.HistoryList .time
    color: var(--TEXT_GREY, #999)
    text-align: right
    font-family: "PlusJakartaSansRegular"
    font-size: 10px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 18px */
    letter-spacing: 0.3px

.HistoryList .btn
    width: 81px
    text-align: center
    color: #fff
    padding: 4px 12px
    border-radius: 100px
    background: var(--SUB_BLUE, #82a4bd)
.HistoryList .HARVEST
    width: 81px
    text-align: center
    color: #fff
    padding: 4px 12px
    border-radius: 100px
    background: linear-gradient(0deg, rgba(50, 89, 180, 0.25) 0%, rgba(50, 89, 180, 0.25) 100%), linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%)

.HistoryList h4
    color: var(--TEXT_BLACK, #282828)
    font-family: "Noto Sans"
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 180%
    /* 28.8px */
    letter-spacing: 0.48px
    flex-basis: 40%

.HistoryList ::v-deep.el-table tr
    background-color: rgba(217,217,217,0.1 )

.AMOUNT-H3
    color: var(--MAIN_BLUE, #3259b4)
    /* heading_en-only */
    font-family: "PlusJakartaSansBlod"
    font-size: 40px
    font-style: normal
    font-weight: 800
    line-height: 130%
    /* 52px */
    letter-spacing: -0.4px

    & span
        padding-left: 40px
        color: var(--TEXT_BLACK, #282828)
        /* text_small */
        font-family: "Noto Sans"
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        /* 23.4px */
        letter-spacing: 0.39px

#demo
    width: 100%
    display: flex
    align-items: center

    & .progress
        width: 100%
        height: 6px
        border-radius: 3px
        background: #d9d9d9

    & .progress .progress-bar
        width: 40%
        height: 100%
        border-radius: 3px
        /* background: #0072FF; */

    & .progress .progress-bar .progress-thumb
        width: 24px
        height: 24px
        border-radius: 50%
        background: #3259b4
        /* box-shadow: 0 0 15px 5px #0072FF; */
        float: right
        position: relative
        left: 7px
        top: -9px

.SIMULATORlist
    margin-top: 50px
    display: flex

    & li
        margin-right: 40px

    & li h3
        color: #282828
        /* heading_en-only */
        font-family: "Plus Jakarta Sans"
        font-size: 40px
        font-style: normal
        font-weight: 800
        line-height: 130%
        /* 52px */
        letter-spacing: -0.4px

    & li:last-child h3
        color: #3259b4

    & li h3 span
        /* text_small */
        font-family: "Noto Sans"
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        /* 23.4px */
        letter-spacing: 0.39px
.PAYMENT
    position: relative
:deep .el-slider__button
    width: 23px
    height: 23px
    border: 2px solid #325AB4
    background-color: #325AB4
:deep .el-slider__bar
    background-color: transparent
</style>
