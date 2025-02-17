import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const produitsPanier = useSelector((state) => state.produits.panier);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            {produitsPanier.length === 0 ? (
                <Text>Votre panier est vide</Text>
            ) : (
                produitsPanier.map((produit) => (
                    <View key={produit.id} style={styles.produit}>
                        <Image source={{ uri: produit.image }} style={styles.image} />
                        <Text>{produit.title}</Text>
                        <Text>${produit.price.toFixed(2)}</Text>
                    </View>
                ))
            )}
            <Button title="Proceed to Payment" onPress={() => alert('Payment Processed')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    produit: {
        marginBottom: 10,
    },
});

export default Checkout;