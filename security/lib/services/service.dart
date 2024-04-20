import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// Fonction pour envoyer une requête POST à l'API Node.js
Future<void> createUser(String username, String password, String telephone,
    BuildContext context) async {
  // URL de ton API Node.js pour créer un utilisateur
  var url = 'http://localhost:2500/register';

  try {
    // Envoie de la requête POST avec les données du nouvel utilisateur
    var response = await http.post(
      Uri.parse(url),
      body: {
        'username': username,
        'password': password,
        'telephone': telephone,
      },
    );

    // Vérification de la réponse
    if (response.statusCode == 200) {
      // Succès : L'utilisateur a été créé avec succès
      print('Utilisateur créé avec succès');
      Navigator.pushReplacementNamed(context, "/home");
    } else {
      // Erreur : La création de l'utilisateur a échoué
      print('Erreur lors de la création de l\'utilisateur : ${response.body}');
    }
  } catch (e) {
    // Gestion des erreurs
    print('Erreur lors de la connexion à l\'API : $e');
  }
}

// // Utilisation de la fonction pour créer un utilisateur
// void main() {
//   createUser('utilisateur1', 'motdepasse', '0123456789');
// }
