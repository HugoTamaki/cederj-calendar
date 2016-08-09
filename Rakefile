# encoding: utf-8

require 'csv'
require 'json'

desc "Reads csv info and shots them to data folder"
task :read_csv do

  result = {
    disciplines: []
  }

  file_contents = CSV.read('data/disciplines.csv', col_sep: ',')

  file_contents.each do |row|
    unless row[0] == 'name'
      hash_result = {}
      hash_result[:name]         = row[0]
      hash_result[:ap1_local]    = row[1]
      hash_result[:ap1_date]     = row[2]
      hash_result[:ap1_time]     = row[3]
      hash_result[:ap2_local]    = row[4]
      hash_result[:ap2_date]     = row[5]
      hash_result[:ap2_time]     = row[6]
      hash_result[:tutor]        = row[7]
      hash_result[:ad1_date]     = row[8]
      hash_result[:ad2_date]     = row[9]
      hash_result[:course]       = row[10]
      result[:disciplines]   << hash_result
    end
  end

  File.open('data/disciplines.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end

  result = {
    courses: []
  }

  file_contents = CSV.read('data/courses.csv', col_sep: ',')

  file_contents.each do |row|
    unless row[0] == 'name'
      hash_result = {}
      hash_result[:name] = row[0]
      hash_result[:location] = row[1]
      result[:courses] << hash_result
    end
  end

  File.open('data/courses.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end

  result = {
    locations: []
  }

  file_contents = CSV.read('data/locations.csv', col_sep: ',')

  file_contents.each do |row|
    unless row[0] == 'name'
      hash_result = {}
      hash_result[:name] = row[0]
      result[:locations] << hash_result
    end
  end

  File.open('data/locations.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end
end