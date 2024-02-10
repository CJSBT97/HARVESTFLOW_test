<template>
    <div class="modal">
        <el-dialog :visible.sync="dialogVisible"
                   :show-close=false
                   custom-class="customDialog"
                   width="70%">
            <COMINGSOON></COMINGSOON>
            <div class="content">
                <div class="left">
                    <div class="car">
                        <img src="@/assets/images/banner2.png">
                    </div>
                    <div class="text">
                        <div class="itemText">
                            <span>Asset ID</span>
                            <h3>1</h3>
                        </div>
                        <div class="itemText">
                            <span>Vehicle Model</span>
                            <h3>Test Model 1</h3>
                        </div>
                        <div class="itemText">
                            <span>dNFT ID</span>
                            <h3>0x123...789</h3>
                        </div>
                        <div class="itemText">
                            <span>Mileage</span>
                            <p>35,122 km</p>
                        </div>
                        <div class="itemText">
                            <span>Drive History</span>
                            <p>2023 Oct / Started Operation</p>
                            <p>2023 Dec / Changed Driver</p>
                        </div>
                        <div class="itemText">
                            <span>Accident Report</span>
                            <p>2023 Dec / Collision; minor damage</p>
                        </div>

                        <div class="itemText">
                            <span>Driver Info</span>
                            <div class="touxiang">
                                <div class="touxiangBox">
                                    <img src="@/assets/images/touxiang.png">
                                </div>
                                <div>
                                    <span>TRUSTSCORE</span>
                                    <h3>TESTNET</h3>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex;">
                            <div class="itemText">
                                <span>ID</span>
                                <p>0x1234</p>
                            </div>
                            <div class="itemText"
                                 style="margin-left: 10px;">
                                <span>SEX</span>
                                <p>Male</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="map">
                        <div class="title">
                            <h3>Phnom Penh, Cambodia</h3>
                            <el-button @click="handleClose"
                                       type="text"><img src="@/assets/images/close.svg"></el-button>
                        </div>
                        <img src="@/assets/images/map2.jpg">
                    </div>
                    <div style="padding: 30px;box-sizing: border-box;">
                        <div style="height:700px;position: relative;z-index: 2;"
                             ref="Mileages"></div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import COMINGSOON from './COMINGSOON'
export default {
    name: 'ModalDialog',
    data () {
        return {
            dialogVisible: false
        }
    },
    created () {
    },
    components: {
        COMINGSOON
    },
    methods: {
        handleClose () {
            this.dialogVisible = false
        },
        openModal () {
            this.dialogVisible = true
            this.$nextTick(() => {
                this.initEchartHistory()
            })
        },
        initEchartHistory () {
            const myChart = echarts.init(this.$refs.Mileages);
            const xData = ['31 Jan.', '1 Feb.', '2 Feb.', '3 Feb.', '4 Feb.', '5 Feb.', '6 Feb.', '7 Feb.', '8 Feb.', '9 Feb.', '10 Feb.', '11 Feb.', '12 Feb.', '13 Feb.']
            const Hours = [360, 560, 660, 260, 160, 460, 660, 560, 300, 450, 340, 250, 423, 360]
            const Mileages = [260, 460, 560, 160, 60, 360, 560, 460, 200, 350, 240, 150, 323, 260]
            const option = {
                title: [
                    {
                        text: 'Driving Chart',
                        textStyle: {
                            color: '#16162F',
                            fontWeight: 700,
                            fontSize: 20
                        }
                    }
                ],
                // 提示框组件
                tooltip: {
                    trigger: 'axis',
                },
                // 图例组件
                legend: {
                    data: ['Hours', 'Mileages']
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 40
                    },
                    {
                        type: 'slider'
                    }
                ],
                // X 轴配置
                xAxis: {
                    type: 'category',
                    data: xData
                },
                // Y 轴配置
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} km'
                        }
                    },
                ],
                // 柱状图配置
                series: [
                    {
                        name: 'Hours',
                        type: 'bar',
                        itemStyle: {
                            color: '#2E84F7',
                            barBorderRadius: [8, 8, 0, 0]
                        },
                        data: Hours
                    },
                    {
                        name: 'Mileages',
                        type: 'line',
                        itemStyle: {
                            color: '#F72E2E',
                        },
                        data: Mileages
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="sass" scoped>
.content
    display: flex
    justify-content: space-between
    .left
        width: 30%
        .car
            box-sizing: border-box
            background: #E1EBF2
            padding: 20%
            display: flex
            height: 300px
            align-items: center

        .text
            padding: 30px
            box-sizing: border-box
            border-right: 1px solid #E1EBF2
            .itemText
                margin-top: 20px
                span
                    color: var(--TEXT_GREY, #999)
                    font-size: 13px
                    line-height: 180%
                    letter-spacing: 0.39px
                h3
                    color: #16162F
                    font-size: 20px
                    font-weight: 700
                    line-height: 180%
                    letter-spacing: 0.6px
                p
                    color: var(--TEXT_BLACK, #282828)
                    font-size: 16px
                    line-height: 180%
                    letter-spacing: 0.48px
            .touxiang
                margin-top: 10px
                display: flex
                align-items: center
                .touxiangBox
                    margin-right: 10px
                    border-radius: 50%
                    width: 90px
                    height: 90px
                    border: 1px solid rgba(0, 0, 0, 0.20)
    .right
        width: 70%
        .map
            height: 300px
            position: relative
            .title
                position: absolute
                top: 0px
                left: 20px
                width: 95%
                display: flex
                justify-content: space-between
                align-items: center
                z-index: 4
                h3
                    color: #FFF
                    font-size: 16px
                img
                    width: 26px
                    height: 26px
            img
                height: 300px
                object-fit: cover
</style>

<style lang="sass">
@import url(@/style/el-dialog.css)
</style>