class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :formatted_created_at
end
