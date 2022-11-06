import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "../bottom_tabs/bottom_tabs";
import SeeallScreen from "../screens/see_all/SeeallScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import PoliciesScreen from "../screens/policies/PoliciesScreen";
import QR_Screen from "../screens/QR/QR_Screen";
import OfferDetailsScreen from "../screens/offer/OfferDetailsScreen";
import OfferScreen from "../screens/offer/OfferScreen";
import RechargeScreen from "../screens/recharge/RechargeScreen";
import RechargePlanScreen from "../screens/recharge/RechargePlanScreen";
import RechargeplanpayScreen from "../screens/recharge/RechargeplanpayScreen";
import DTHProviderScreen from "../screens/DTH/DTHProviderScreen";
import SelectedDTHScreen from "../screens/DTH/SelectedDTHScreen";
import PayDTHScreen from "../screens/DTH/PayDTHScreen";
import ElectricityScreen from "../screens/electricity/ElectricityScreen";
import ElectricityDetailScreen from "../screens/electricity/ElectricityDetailScreen";
import ElectricityPayScreen from "../screens/electricity/ElectricityPayScreen";
import PostpaidBill from "../screens/postpaid/PostpaidBill";
import PostpaidBill2 from "../screens/postpaid/PostpaidBill2";
import PayPostpaidScreen from "../screens/postpaid/PayPostpaidScreen";
import BroadBandScreen from "../screens/broadband/BroadBandScreen";
import SelectedBroadbandScreen from "../screens/broadband/SelectedBroadbandScreen";
import SelectedBroadbandScreen2 from "../screens/broadband/SelectedBroadbandScreen2";
import WaterScreen from "../screens/water/WaterScreen";
import WaterPHEDScreen from "../screens/water/WaterPHEDScreen";
import LandlineScreen from "../screens/landline/LandlineScreen";
import LandlineDetailScreen from "../screens/landline/LandlineDetailScreen";
import GasCylinderScreen from "../screens/gas/GasCylinderScreen";
import GasDetailScreen from "../screens/gas/GasDetailScreen";
import PayGasScreen from "../screens/gas/PayGasScreen";
import PipedGasScreen from "../screens/gas_pipe/PipedGasScreen";
import PipedGasDetailScreen from "../screens/gas_pipe/PipedGasDetailScreen";
import CableTVScreen from "../screens/cable_tv/CableTVScreen";
import CableTVDetailScreen from "../screens/cable_tv/CableTVDetailScreen";
import LoanRepaymentScreen from "../screens/loan_repayment/LoanRepaymentScreen";
import LoanRepaymentDetailScreen from "../screens/loan_repayment/LoanRepaymentDetailScreen";
import InsuranceScreen from "../screens/insurance/InsuranceScreen";
import InsuranceDetailScreen from "../screens/insurance/InsuranceDetailScreen";
import FastagScreen from "../screens/fastag/FastagScreen";
import FastagDetailScreen from "../screens/fastag/FastagDetailScreen";
import AddNewCreditCardScreen from "../screens/credit_card/AddNewCreditCardScreen";
import PayCreditCardBillScreen from "../screens/credit_card/PayCreditCardBillScreen";
import HousingSocietyScreen from "../screens/housing/HousingSocietyScreen";
import HousingSocietyProvider from "../screens/housing/HousingSocietyProvider";
import SelectedHSProvider from "../screens/housing/SelectedHSProvider";
import SubscriptionScreen from "../screens/subscriptions/SubscriptionScreen";
import SubscriptionDetailScreen from "../screens/subscriptions/SubscriptionDetailScreen";
import SubscriptionPlanScreen from "../screens/subscriptions/SubscriptionPlanScreen";
import HealthInsuranceScreen from "../screens/health_insurance/HealthInsuranceScreen";
import HealthInsuranceDetailScreen from "../screens/health_insurance/HealthInsuranceDetailScreen";
import BrandVouchersScreen from "../screens/brand_vouchers/BrandVouchersScreen";
import TransactionScreen from "../screens/transaction/TransactionScreen";
import BillNotifications from "../screens/bill_notifications/BillNotifications";
import MyBusinesScreen2 from "../my_business/MyBusinesScreen2";
import RechargeSuccessfulScreen from "../screens/recharge_successful/RechargeSuccessfulScreen";
import TransferToBankScreen from "../screens/recharge_successful/TransferToBankScreen";
import TransferToBankScreen2 from "../screens/recharge_successful/TransferToBankScreen2";
import TransferToBankScreen3 from "../screens/recharge_successful/TransferToBankScreen3";
import RazorpayChecout from "../screens/razorpay/razorpaycheckout";

export default function AppStack() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <>
            <Stack.Navigator initialRouteName="Root"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Root" component={BottomTabs} />
                <Stack.Screen name="SeeallScreen" component={SeeallScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="RazorpayCheckout" component={RazorpayChecout} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="PoliciesScreen" component={PoliciesScreen} />
                <Stack.Screen name="QR_Screen" component={QR_Screen} />
                <Stack.Screen name="OfferScreen" component={OfferScreen} />
                <Stack.Screen name="OfferDetailsScreen" component={OfferDetailsScreen} />
                <Stack.Screen name="RechargeScreen" component={RechargeScreen} />
                <Stack.Screen name="RechargePlanScreen" component={RechargePlanScreen} />
                <Stack.Screen name="RechargeplanpayScreen" component={RechargeplanpayScreen} />
                <Stack.Screen name="DTHProviderScreen" component={DTHProviderScreen} />
                <Stack.Screen name="SelectedDTHScreen" component={SelectedDTHScreen} />
                <Stack.Screen name="PayDTHScreen" component={PayDTHScreen} />
                <Stack.Screen name="ElectricityScreen" component={ElectricityScreen} />
                <Stack.Screen name="ElectricityDetailScreen" component={ElectricityDetailScreen} />
                <Stack.Screen name="ElectricityPayScreen" component={ElectricityPayScreen} />
                <Stack.Screen name="PostpaidBill" component={PostpaidBill} />
                <Stack.Screen name="PostpaidBill2" component={PostpaidBill2} />
                <Stack.Screen name="PayPostpaidScreen" component={PayPostpaidScreen} />
                <Stack.Screen name="BroadBandScreen" component={BroadBandScreen} />
                <Stack.Screen name="SelectedBroadbandScreen" component={SelectedBroadbandScreen} />
                <Stack.Screen name="SelectedBroadbandScreen2" component={SelectedBroadbandScreen2} />
                <Stack.Screen name="WaterScreen" component={WaterScreen} />
                <Stack.Screen name="WaterPHEDScreen" component={WaterPHEDScreen} />
                <Stack.Screen name="LandlineScreen" component={LandlineScreen} />
                <Stack.Screen name="LandlineDetailScreen" component={LandlineDetailScreen} />
                <Stack.Screen name="GasCylinderScreen" component={GasCylinderScreen} />
                <Stack.Screen name="GasDetailScreen" component={GasDetailScreen} />
                <Stack.Screen name="PayGasScreen" component={PayGasScreen} />
                <Stack.Screen name="PipedGasScreen" component={PipedGasScreen} />
                <Stack.Screen name="PipedGasDetailScreen" component={PipedGasDetailScreen} />
                <Stack.Screen name="CableTVScreen" component={CableTVScreen} />
                <Stack.Screen name="CableTVDetailScreen" component={CableTVDetailScreen} />
                <Stack.Screen name="LoanRepaymentScreen" component={LoanRepaymentScreen} />
                <Stack.Screen name="LoanRepaymentDetailScreen" component={LoanRepaymentDetailScreen} />
                <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
                <Stack.Screen name="InsuranceDetailScreen" component={InsuranceDetailScreen} />
                <Stack.Screen name="FastagScreen" component={FastagScreen} />
                <Stack.Screen name="FastagDetailScreen" component={FastagDetailScreen} />
                <Stack.Screen name="AddNewCreditCardScreen" component={AddNewCreditCardScreen} />
                <Stack.Screen name="PayCreditCardBillScreen" component={PayCreditCardBillScreen} />
                <Stack.Screen name="HousingSocietyScreen" component={HousingSocietyScreen} />
                <Stack.Screen name="HousingSocietyProvider" component={HousingSocietyProvider} />
                <Stack.Screen name="SelectedHSProvider" component={SelectedHSProvider} />
                <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
                <Stack.Screen name="SubscriptionDetailScreen" component={SubscriptionDetailScreen} />
                <Stack.Screen name="SubscriptionPlanScreen" component={SubscriptionPlanScreen} />
                <Stack.Screen name="HealthInsuranceScreen" component={HealthInsuranceScreen} />
                <Stack.Screen name="HealthInsuranceDetailScreen" component={HealthInsuranceDetailScreen} />
                <Stack.Screen name="BrandVouchersScreen" component={BrandVouchersScreen} />
                <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
                <Stack.Screen name="BillNotifications" component={BillNotifications} />
                <Stack.Screen name="MyBusinesScreen2" component={MyBusinesScreen2} />
                <Stack.Screen name="RechargeSuccessfulScreen" component={RechargeSuccessfulScreen} />
                <Stack.Screen name="TransferToBankScreen" component={TransferToBankScreen} />
                <Stack.Screen name="TransferToBankScreen2" component={TransferToBankScreen2} />
                <Stack.Screen name="TransferToBankScreen3" component={TransferToBankScreen3} />
            </Stack.Navigator>
        </>
    );
}