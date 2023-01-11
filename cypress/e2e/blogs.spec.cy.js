describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "Laxmii",
      username: "Laxmi",
      password: "123",
    };

    const otherUser = {
      name: "usha",
      username: "usha",
      password: "abc",
    };
    cy.request("POST", "http://localhost:3003/api/users", user);
    cy.request("POST", "http://localhost:3003/api/users", otherUser);
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
      cy.contains("a blog created by cypress");
      //cy.contains("Maheshwori");
      // cy.contains("www.himalyan.com")
    });
    it("user can like the blog", function () {
      cy.contains("new blog").click();
      cy.get("#title").type("a blog created by cypress");
      cy.get("#author").type("Maheshwori");
      cy.get("#Url").type("www.himalyan.com");
      cy.get("#submit").click();
      cy.contains("a blog created by cypress");
      cy.contains("view").click();
      cy.contains("like").click();
      cy.contains("1");
    });

    it("user can delete the blog", function () {
      cy.contains("new blog").click();
      cy.get("#title").type("a blog created by cypress");
      cy.get("#author").type("Maheshwori");
      cy.get("#Url").type("www.himalyan.com");
      cy.get("#submit").click();
      cy.contains("view").click();
      cy.contains("remove").click();
      cy.contains("a blog created by cypress").should("not.exist");
    });

    it.only("Blog can not be deleted by other user", function () {
      cy.contains("new blog").click();
      cy.get("#title").type("a blog created by cypress");
      cy.get("#author").type("Maheshwori");
      cy.get("#Url").type("www.himalyan.com");
      cy.get("#submit").click();
      cy.contains("a blog created by cypress");
      cy.contains("logout").click();
      cy.contains("login").click();
      cy.get("#username").type("usha");
      cy.get("#password").type("abc");
      cy.get("#login-button").click();
      cy.contains("usha logged in");
      cy.contains("view").click();
      //cy.contains("remove").click();
    });
  });
});
