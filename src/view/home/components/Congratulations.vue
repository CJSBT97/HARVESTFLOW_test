<template>
    <div>
        <el-dialog :visible.sync="dialogVisible"
                   :show-close=false
                   width="22%">
            <div class="mynft">
                <div class="title">
                    <h3>Congratulations!</h3>
                    <p>Your NFT has successfully been minted!!</p>
                    <span>Transaction:{{ Transaction }}</span>
                </div>
                <div class="mynftCard">
                    <div class="mynftCard-img">
                        <img :src="SBTUrl">
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
                                <div><img src="@/assets/images/blrst.svg"><span>Testnet</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <el-button class="submit"
                           @click="AccountPage">Go to Account Page</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { truncateString } from '@/utils/app';
import { userSBTID, SBTUrl } from '@/utils/contract'
export default {
    name: 'CongratulationsDialog',
    data () {
        return {
            dialogVisible: false,
            Transaction: null
        }
    },
    computed: {
        ...mapState('web3', ['account', 'userSBTID', 'SBTUrl'])
    },
    methods: {
        showDialog () {
            this.dialogVisible = true
            userSBTID(this.account).then(res => {
                if (Number(res) != 0) {
                    this.$store.commit('web3/saveuserSBTID', Number(res))
                    SBTUrl(res).then(e => {
                        this.$store.commit('web3/saveSBTUrl', e)
                        this.Transaction = truncateString('0x4d4679Bd8EA26070340eaE9b5c5564D6Dc5d2AD5')
                    })
                }
            })
        },
        AccountPage () {
            this.$router.push('/AccountOverview')
        },
    }
}
</script>

<style lang="sass" scoped>
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
:v-deep.el-dialog
    background: transparent
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
.mynft
    padding: 15px
    border-radius: 15px
    background: #fff
    & .title
        margin: 16px 0
        text-align: center
        & h3
            font-family: "PlusJakartaSansRegular"
            font-size: 40px
            font-weight: 800
            line-height: 130%
            letter-spacing: -0.4px
            background: var(--HAPPY_GRADIENT, linear-gradient(82deg, #30BAE6 -0.19%, #D6ACFF 99.05%))
            background-clip: text
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent
        & p
            margin: 16px 0
            color: #000
            text-align: center
            font-family: "Noto Sans"
            font-size: 16px
            font-style: normal
            font-weight: 400
            line-height: 180%
            letter-spacing: 0.48px
        & span
            color: var(--TEXT_GREY, #999)
            text-align: center
            font-family: "Noto Sans"
            font-size: 13px
            font-style: normal
            font-weight: 400
            line-height: 180%
            letter-spacing: 0.39px
.mynftCard
    & .mynftCard-text
        padding: 30px
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
                & img
                    width: 51%
                    display: inline-block
                & span
                    font-size: 12px
    & .mynftCard-img
        overflow: hidden
        height: 280px
        border-radius: 15px 15px 0 0
</style>

<style lang="sass">
@import url(@/style/el-dialog.css)
</style>