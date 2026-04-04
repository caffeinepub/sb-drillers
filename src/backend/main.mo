import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Text.compare(enquiry1.name, enquiry2.name);
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      message;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.toArray().sort();
  };
};
