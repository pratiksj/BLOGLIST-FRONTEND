describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "Laxmii",
      username: "Laxmi",
      password: "123",
    };
    cy.request("POST", "http://localhost:3003/api/users", user);
    cy.visit("http://localhost:3000");
  });

  it("Login form is shown", function () {
    cy.contains("login").click();
  });
  it("login fails with wrong password", function () {
    cy.contains("login").click();
    cy.get("#username").type("Laxmi");
    cy.get("#password").type("abc");
    cy.get("#login-button").click();

    cy.contains("wrong username or password");
  });

  it("user can login", function () {
    cy.contains("login").click();
    cy.get("#username").type("Laxmi");
    cy.get("#password").type("123");
    cy.get("#login-button").click();

    cy.contains("Laxmii logged in");
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "Laxmi", password: "123" });
    });

    it("A blog can be created", function () {
      cy.contains("new blog").click();
      cy.get("#title").type("a blog created by cypress");
      cy.get("#author").type("Maheshwori");
      cy.get("#Url").type("www.himalyan.com");
      cy.get("#submit").click();
      cy.contains("a blog created by cypress Maheshwori");
      // cy.contains("Maheshwori");
      // cy.contains("www.himalyan.com");
    });
  });
});
