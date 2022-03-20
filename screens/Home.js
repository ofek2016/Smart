import React from "react";
import { COLORS, FONTS, SIZES, icons } from '../constants';
import moment from 'moment';//בשביל התאריך 
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform
} from 'react-native';




import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

// import { Svg,Line } from 'react-native-svg';




const Home = () => {


    //זה ירדנר ישר (DATA)אם נרצה להוסיף עוד סוגי טלפון פשוט צריך להוסיף למידע 
    //לחשוב אם להוסיף תמונה של הטלפון ?
    // dummy data
    let Data = [
        {
            id: 1,
            name: "Apple",
            icon: icons.Apple,
            color: COLORS.black,
            products: [
                {
                    id: 1,
                    title: "iPhone 13",//לחשוב אם להוסיף תמונה של הטלפון 
                    positive: 60,
                    negative: 40,
                    camera: 59,
                    network: 10,
                    price: 23,
                    battery: 8

                },
            ],
        },
        {
            id: 2,
            name: "Samsung",
            icon: icons.samsung,
            color: COLORS.blue,
            products: [
                {
                    id: 2,
                    title: "galaxy s21",//לחשוב אם להוסיף תמונה של הטלפון 
                    positive: 45,
                    negative: 55,
                    camera: 65,
                    network: 15,
                    price: 7,
                    battery: 13


                },
            ],
        },
        {
            id: 3,
            name: "Oneplus",
            icon: icons.oneplus,
            color: COLORS.red,
            products: [
                {
                    id: 3,
                    title: "OnePlus 9",//לחשוב אם להוסיף תמונה של הטלפון 
                    positive: 35,
                    negative: 65,
                    camera: 40,
                    network: 15,
                    price: 10,
                    battery: 35


                },
            ],

        },

        {
            id: 4,
            name: "Xiaomi",
            icon: icons.Xiaomi,
            color: COLORS.yellow,
            products: [
                {
                    id: 4,
                    title: "Redmi note 11",//לחשוב אם להוסיף תמונה של הטלפון 
                    positive: 25,
                    negative: 75,
                    camera: 35,
                    network: 25,
                    price: 10,
                    battery: 30


                },
            ],

        },

    ]

    const [viewMode, setViewMode] = React.useState("chart");
    const [companies, setCompanies] = React.useState(Data);
    const [selectedCompany, setSelectedCompany] = React.useState(null)

    // כפתורים של הלמעלה התפריט והחזור
    function rendernavbar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >


                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log("more")}
                >
                    <Image
                        source={icons.more_icon}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50 }}
                    onPress={() => console.log("back")}
                >

                    <Image
                        source={icons.back_arrow_icon}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>


            </View>
        )

    }

    //הכתורת והלוגו והתאריך 
    function renderHeader() {
        return (
            <View style={{
                paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white
            }}>

                <View
                    style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={icons.SmaertAnalysis}
                        style={{

                            width: 120,
                            height: 60,
                            tintColor: COLORS.black,
                        }}

                    />
                </View>
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Smart Analysis</Text>

                <View style={{ flexDirection: 'row-reverse', marginTop: SIZES.padding, alignItems: 'center' }}>

                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>


                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}> {moment().format('ll')}</Text>
                    </View>
                </View>
            </View>


        )
    }
    //הכותרת של החברות וגם הכפתורים של התרשים והרשימה של החברות 
    function renderCompanyHeaderSection() {

        return (
            <View style={{ flexDirection: 'row-reverse', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }} >
                {/* Title   */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>COMPANIES</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}> {companies.length} Total</Text>{/* מספר החברות */}
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}

                    >
                        <Image
                            source={icons.chart_icon}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray
                            }}

                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("list")}
                    >

                        <Image
                            source={icons.menu_icon}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray

                            }}

                        />
                    </TouchableOpacity>


                </View>
            </View>

        )


    }

    //הכפתורים של החברות 
    function renderCompanyList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        margin: 5,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        ...style.shadow
                    }}

                    onPress={() => setSelectedCompany(item)}
                >
                    <Image
                        source={item.icon}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: item.color
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                {/* <Text>test</Text> */}
                <View>
                    {/* ממשק ביצועים לעיבוד רשימות בסיסיות ושטוחות, התומך בתכונות השימושיות ביותר: חוצה פלטפורמה מלאה. מצב אופקי אופציונלי. התקשרות חוזרת ניתנות להגדרה. */}
                    <FlatList
                        data={companies}
                        renderItem={renderItem}
                        keyExtractor={(itme) => `${itme.id}`}
                        numColumns={2}
                    />

                </View>



            </View>
        )




    }

    // Smartphonesהכותרת של 
    function renderProductsTitle() {
        return (
            <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
                {/* Title */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>SMARTPHONES</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>  {/*{companies.products.length}*/} 4 Total</Text>
            </View>
        )
    }


    //הכרטיסה של הטלפונים עם גרף של בעיות   וגם התוצאות של החיובי ושלילי של הטלפון לפי לחיצה של החברה 
    function renderProducts() {
        let allProducts = selectedCompany ? selectedCompany.products : []
        const graphicColor = [COLORS.red, COLORS.darkgreen, COLORS.purple, COLORS.yellow];


        const renderItem = ({ item, index }) => (
            <View style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...style.shadow
            }}

            >



                {/* Title */}
                <View style={{ flexDirection: 'row-reverse', padding: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}
                    >
                        <Image
                            source={selectedCompany.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCompany.color
                            }}
                        />
                    </View>
                    <Text style={{ ...FONTS.h3, color: selectedCompany.color, }}>{selectedCompany.name}</Text>
                </View>
                {/* Product Description */}
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                        Problems
                    </Text>
                    {/* דוגמא עד שאני אשתמש בתרשים האמיתי דרך הספרייה */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Image
                            source={icons.Problem}
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: 70
                            }}
                        /> */}
                        {/*    לפי טלפון   העוגה  */}
                        {/* לחשוב עם להוסיף אירוע מגניב לעוגה  */}
                        <VictoryPie
                            //   categories={{
                            //     x: ["camera", "network", "price", "battery"]
                            //   }}

                            data={[{ label: `${item.camera}%`, y: item.camera }, { label: `${item.network}%`, y: item.network }, { label: `${item.price}%`, y: item.price }, { label: `${item.battery}%`, y: item.battery }]}
                            width={300}
                            height={300}
                            colorScale={graphicColor}
                            labels={(datum) => `${datum.y}`}
                            radius={SIZES.width * 0.4 - 50}
                            innerRadius={30}
                            labelRadius={({ innerRadius }) => (SIZES.width * 0.3 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: COLORS.white, ...FONTS.body3, fontSize: 20 },
                                data: {
                                    fillOpacity: 0.9, stroke: COLORS.black, strokeWidth: 3
                                },
                            }}

                        />
                    </View>

                    <View style={{ paddingHorizontal: SIZES.body3 }} >
                        <Text style={{ ...FONTS.body3, color: COLORS.red }}> camera - {item.camera}%</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgreen }}> network- {item.network}%</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.purple }}> price - {item.price}% </Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.yellow }}> battery - {item.battery}% </Text>
                    </View>

                    {/* positive/negative */}
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomStartRadius: SIZES.radius,
                            borderBottomEndRadius: SIZES.radius,
                            borderColor: selectedCompany.color,
                            borderWidth: 5

                        }}
                    >
                        <Text style={{ color: COLORS.darkgreen, ...FONTS.body3 }}>Positive={item.positive}% </Text>
                        <Text style={{ color: COLORS.red, ...FONTS.body3 }}>Negative={item.negative}% </Text>
                    </View>
                </View>
            </View>
        )


        return (
            <View>
                {renderProductsTitle()}

                {
                    // <Text>Test</Text>
                    <FlatList
                        data={allProducts}
                        renderItem={renderItem}
                        keyExtractor={(item) => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }




            </View>
        )

    }
    //מידע של הגרף החיובי
    function processCompanyDataToDisplay() {
        let charData = companies.map((item) => {
            let num = item.products.map((x) => (x.positive))
            return {
                x: item.name,
                y: Number(num),
            }
        })
        return charData

    }


    //רנדור של הגרף ברים החיובי 
    function renderChartP() {

        let charDataP = processCompanyDataToDisplay()

        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>task</Text> */}
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>POSITIVE</Text>
                <VictoryChart
                    responsive={false}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 200 }
                    }}

                    theme={VictoryTheme.material}
                >
                    <VictoryAxis />


                    <VictoryBar
                        barRatio={1}
                        cornerRadius={0}
                        alignment='middle'
                        labels={({ datum }) => `${datum.y}%`}
                        style={{ data: { fill: COLORS.darkgreen } }}
                        data={charDataP}


                    />
                </VictoryChart>
            </View>

        )


        // else {
        //     // Android workaround by wrapping VictoryPie with SVG
        //     return (
        //         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        //             <Svg width={SIZES.width} height={SIZES.width} style={{ width: "100%", height: "auto" }}>

        //                 <VictoryChart
        //                     standalone={false}
        //                     responsive={false}
        //                     animate={{
        //                         duration: 500,
        //                         onLoad: { duration: 200 }
        //                     }}

        //                     theme={VictoryTheme.material}
        //                 >
        //                     <VictoryAxis />


        //                     <VictoryBar
        //                         barRatio={1}
        //                         cornerRadius={0}
        //                         alignment='middle'
        //                         labels={({ datum }) => `y: ${datum.y}`}
        //                         style={{ data: { fill: COLORS.darkgreen } }}
        //                         data={charData}


        //                     />
        //                 </VictoryChart>

        //             </Svg>

        //         </View>
        //     )
        // }


    }
    //מידע של הגרף השלילי
    function processCompanyDataToDisplayN() {
        let charData = companies.map((item) => {
            let num = item.products.map((x) => (x.negative))
            return {
                x: item.name,
                y: Number(num),
            }
        })
        return charData

    }

    //רנדור של הגרף ברים שלילי 
    function renderChartN() {
        let charDataN = processCompanyDataToDisplayN()
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>task</Text> */}
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>NEGATIVE</Text>
                <VictoryChart
                    responsive={false}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 200 }
                    }}

                    theme={VictoryTheme.material}
                >
                    <VictoryAxis />


                    <VictoryBar
                        barRatio={1}
                        cornerRadius={0}
                        alignment='middle'
                        labels={({ datum }) => `${datum.y}%`}
                        style={{
                            data: { fill: COLORS.red },
                        }}
                        data={charDataN}



                    />
                </VictoryChart>
            </View>

        )

    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* nav bar section */}
            {rendernavbar()}

            {/* header section */}
            {renderHeader()}

            {/* Company header sectio */}
            {renderCompanyHeaderSection()}
            {/*באנדרואיד, ScrollView היא קבוצת תצוגות המשמשת ליצירת תצוגות שניתנות לגלילה אנכית. */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 60 }}
                prop nestedScrollEnabled={true}
            >
                {
                    <View>
                        {viewMode == "list" &&
                            <View>
                                {/* Company List  */}
                                {renderCompanyList()}
                                {/* Product card */}
                                {renderProducts()}
                            </View>}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {/* VictoryBar POSITIVE */}
                        {renderChartP()}
                        {/* VictoryBar NEGATIVE */}
                        {renderChartN()}
                    </View>
                }
            </ScrollView>

            {/* <FlatList
                contentContainerStyle={{ paddingBottom: 60 }}
                data={companies}
                LisHeaderComponent={
                    viewMode == "list" &&
                    <View>
                        {renderCompanyList()}
                    </View>

                }
                ListFooterComponent={
                    viewMode == "list" &&
                    <View>
                        {renderCompanyList()}
                    </View>}
            /> */}



        </View>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }


})

export default Home;