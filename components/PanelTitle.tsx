import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { primary } from "@/constants/Colors";

export const PanelTitle = ({ title, infoText, hasAddIcon = false }: { title: string; infoText: string; hasAddIcon?: boolean }) => {
    return (
      <View style={styles.panelTitle}>
        <View style={[styles.between, { width: '100%' }]}>
          <Text style={styles.sectionLabel}>{title}</Text>
          <View style={[styles.between, { gap: 10 }]}>
            {hasAddIcon && <Ionicons name="add" size={20} color="black" />}
            <Ionicons name="ellipsis-horizontal" size={18} color={"black"} />
          </View>
        </View>
        <View style={styles.orangeLine} />
        <Text style={styles.info}>{infoText}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    panelTitle: {
        width: '100%',
        gap: 4
    },
    between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info: {
        color: '#888',
    },
    orangeLine: {
        width: '40%',
        height: 2,
        borderRadius: 5,
        backgroundColor: primary,
        elevation: 2,
    },
    sectionLabel: {
        fontSize: 18,
        fontWeight: '600',
    },
  })