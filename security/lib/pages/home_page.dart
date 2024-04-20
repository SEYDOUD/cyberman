import 'package:flutter/material.dart';
// import 'package:security/services/service.dart';

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() => _LoginPageState();
}

class _LoginPageState extends State<HomePage> {
  TextEditingController usernameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController telephoneController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Text("hello"),
      ),
    );
  }
}
