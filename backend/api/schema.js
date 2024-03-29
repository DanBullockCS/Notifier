export default `
scalar Date

type Mutation {
  test(id: ID): String
}

type Query {
  Profile(id: ID!): Profile
  # Profiles: [Profile!]!

  User(id: ID!): User
  Users: [User]!

  UserGroup(id: ID!): UserGroup
  UserGroups(id: ID): [UserGroup]!


  Event(id: ID!): Event
  Events(id: ID): [Event]!


  Notifier(id: ID!): Notifier
  Notifiers(id: ID): [Notifier]!

  NotifierGroup(id: ID!): NotifierGroup
  NotifierGroups: [NotifierGroup]
  BaseNotifierGroups: [NotifierGroup]
  NotifierGroupTree: [NotifierGroup]


  Notification(id: ID!): Notification
  Notifications: [Notification]!
}

type Profile {
  id: ID!
  User: User!
  diplayName: String!
  createdAt: Date!
  updatedAt: Date!
}

type User {
  id: ID!
  name: String!
  createdAt: Date!
  updatedAt: Date!
  Profile: Profile!
  Groups: [UserGroup]
}

type UserGroup {
  id: ID!
  Users: [User!]!
  displayName: String!
  extraData: String
  createdAt: Date!
  updatedAt: Date!
  deletedAt: Date!
}


interface EventCreator {
  id: ID!
}

type Event {
  id: ID!
  Type: EventType!
  Data: EventData!
  Creator: EventCreator!
  createdAt: Date!
  deletedAt: Date!
}
type EventData {
  id: ID!
  Events: [Event!]!
  data: String!
  sender: String!
  extraData: String
  createdAt: Date!
  updatedAt: Date!
  deletedAt: Date!
}
type EventType {
  id: ID!
  name: String!
  data: String
}

type Notifier implements EventCreator {
  id: ID!
  Group: NotifierGroup
  Events: [Event]
  token: String!
  extraData: String
  createdAt: Date!
  updatedAt: Date!
  deletedAt: Date!
}
type NotifierGroup {
  id: ID
  displayName: String
  Parent: NotifierGroup
  Children: [NotifierGroup]
  Owner: UserGroup
  Notifiers: [Notifier!]
  extraData: String
  createdAt: Date!
  updatedAt: Date!
  deletedAt: Date!
}

type Notification {
  id: ID!
  UserGroup: UserGroup!
  Events: [Event]
  Type: NotificationType!
  title: String!
  body: String!
  state: Int!
  deliveredAt: Date!
  createdAt: Date!
  deletedAt: Date!
}
type NotificationType {
  id: ID!
  name: String!
  data: String
}

`;
