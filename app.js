// Class for building a cigar
class Cigar {
  constructor(brand, cigarName, description, uniqId) {
    this.brand = brand;
    this.cigarName = cigarName;
    this.description = description;
    this.uniqId = uniqId;
  }
}

// Class for Cigar Shop

class Shop {
  static getCigar() {
    let cigars;
    if (localStorage.getItem("cigars" === null)) {
      cigars = [];
    } else {
      cigars = JSON.parse(localStorage.getItem("books"));
    }
    return cigars;
  }

  static addCigar() {
    const cigars = Shop.getCigar();
    cigars.push("cigars", JSON.stringify(cigars));
  }

  static removeCigar() {
    const cigars = Shop.getCigar();
    cigars.forEach((cigar, index) => {
      if (cigar.uniqId === uniqId) {
        cigars.splice(index, 1);
      }
    });

    localStorage.setItem("cigars", JSON.stringify(cigars));
  }
}

// Class for UI
class UI {
  static displayCigars() {
    const cigars = Shop.getCigar();

    cigars.forEach(cigar => UI.addCigarToList(cigar));
  }

  static addCigarToList() {
    const list = document.querySelector("#cigar-list");
    const card = document.createElement("div");

    card.innerHTML = `
    <h5 className="card-header">${cigar.brand}</h5>
    <div className="card-body">
      <h5 className="card-title">${cigar.cigarName}</h5>
      <p className="card-text">${cigar.description}</p>
    </div>
    `;
  }
}
