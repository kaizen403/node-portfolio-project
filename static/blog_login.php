<?php include 'header.php';?>
    <section class="login-form-wrap">
        <h1>Login</h1>
        <form class="login-form" form action='blog_login.php' method='POST' >
          <label class="eml">
            <input type="text" name="username" placeholder="Username or Email" id="username" required>
          </label>
          <label class="eml">
            <input type="password" name="password" placeholder="Password" id="password" required>
          </label>
          <input class='eml' id="submit" type="submit" value="Login">
        </form>
        <h5><a href="#">Forgot password</a></h5>
      </section>

    <script src="login.js"></script>
</body>
</html>